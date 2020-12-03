import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListUsers.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
    };
  }
  render() {
    var { user, index } = this.props;

    var role = "";
    if (user.role == "5fc5cde29e609a1574e4271d") {
      role = "Admin";
    }
    if (user.role == "5fc5dfa79e609a1574e4271e") {
      role = "Customer";
    }
    if (user.role == "5fc5dfcc9e609a1574e4271f") {
      role = "Shipper";
    }

    return (
      <tr data-expanded="true">
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.address.city}</td>
        <td>{role}</td>
        <th>{user.user_name}</th>
        <td>{user.phone_number}</td>
        <td>
          <button class="pd-setting">Đang sử dụng</button>
        </td>
        <td>
          <Link to={`/user-edit/${user.id}`}>
            <button data-toggle="tooltip" title="Edit" class="pd-setting-ed">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </Link>
          <button data-toggle="tooltip" title="Trash" class="pd-setting-ed">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default User;
