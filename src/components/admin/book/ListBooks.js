import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListBooks.css";
import Book from "./Book";

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      page_size: 20,
    };
  }
  componentDidMount() {
    var { page_size } = this.props;
    fetch("http://localhost:1234/api/v1/book/books/?page_size=" + page_size)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            books: result.data,
          });
        },
        (error) => {
          console.log("Error : ", error);
        }
      );
  }
  render() {
    var { books } = this.state;
    var book = books.map((book, index) => {
      return <Book key={index} index={index} book={book} />;
    });
    return (
      <div className="table-agile-info">
        <div className="panel panel-default">
          <h4>Tất cae sách</h4>
          <Link className="add-product" to="/book-add">
            thêm sách
          </Link>
          <div>
            <table
              className="table"
              ui-jq="footable"
              ui-options='{
        "paging": {
          "enabled": true
        },
        "filtering": {
          "enabled": true
        },
        "sorting": {
          "enabled": true
        }}'
            >
              <thead>
                <tr>
                  <th data-breakpoints="xs">STT</th>
                  <th>Ảnh</th>
                  <th>Tên sách</th>
                  <th>Trạng thái </th>
                  <th>Só lượng </th>
                  <th>Loại sách </th>
                  <th data-breakpoints="xs">Giá nhập </th>
                  <th data-breakpoints="xs sm md" data-title="DOB">
                    Giá bán
                  </th>
                  <th data-breakpoints="xs sm md" data-title="DOB">
                    Cài đặt
                  </th>
                </tr>
              </thead>
              <tbody>{book}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
