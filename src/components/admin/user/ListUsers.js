import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListUsers.css";
import User from "./User";

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:1234/api/v1/book/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            users: result.data,
          });
        },
        (error) => {
          console.log("Error : ", error);
        }
      );
  }
  render() {
    var { users } = this.state;
    var Users = users.map((user, index) => {
      return <User key={index} index={index} user={user} />;
    });

    return (
      <div className="table-agile-info">
        <div className="panel panel-default">
          <h4>Tất cả người dùng</h4>
          <div class="add-product">
            <Link to="add-user"> Thêm tài khoản</Link>
            {/* <a href="add-professor.html">Thêm tài khoản</a> */}
          </div>
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
                  <th>Tên tài khoản</th>
                  <th>Công ty</th>
                  <th>Loại khách hàng</th>
                  <th>Tên người dùng</th>
                  <th>Số điện thoại</th>
                  <th data-breakpoints="xs">Trạng thái</th>
                  <th data-breakpoints="xs sm md" data-title="DOB">
                    Cài đặt
                  </th>
                </tr>
              </thead>
              <tbody>{Users}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUsers;
