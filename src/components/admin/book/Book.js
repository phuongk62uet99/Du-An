import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Book extends Component {
  render() {
    var { book, index } = this.props;
    return (
      <tr data-breakpoints="xs">
        <td>{index + 1}</td>
        <td>Anhr 01</td>
        <td>{book.name} </td>
        <td>
          <button className="pd-setting">Active</button>
        </td>
        <th>{book.quantity}</th>
        <td>Kiến thức chung</td>
        <th>{book.price}</th>
        <td>175.000 VND</td>
        <td>
          <Link to={`/book-edit/${book.id}`}>
            <button
              data-toggle="tooltip"
              title="Edit"
              className="pd-setting-ed"
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </Link>
          <button data-toggle="tooltip" title="Trash" className="pd-setting-ed">
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default Book;
