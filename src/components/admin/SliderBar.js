import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routes from "./routes/Routes";

class SliderBar extends Component {
  render() {
    return (
      <aside>
        <div id="sidebar" className="nav-collapse">
          <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">
              <li>
                <a className="active" href="index.html">
                  <i className="fa fa-dashboard" />
                  <span>Trang chủ</span>
                </a>
              </li>
              <li className="sub-menu">
                <a href="javascript:;">
                  <i className="fa fa-th" />
                  <span>Sách</span>
                </a>
                <ul className="sub">
                  <li>
                    <Link to="/books">Tất cả sách</Link>
                  </li>
                  <li>
                    <Link to="/bookEdit">Chỉnh sửa sách </Link>
                  </li>
                  <li>
                    <Link to="/bookDetail">Xem chi tiết</Link>
                  </li>
                </ul>
              </li>
              <li className="sub-menu">
                <a href="javascript:;">
                  <i className="fa fa-tasks" />
                  <span>Người dùng</span>
                </a>
                <ul className="sub">
                  <li>
                    <Link to="/users">Tất cả người dùng</Link>
                  </li>
                  <li>
                    <Link to="/userEdit">Chỉnh sửa người dùng </Link>
                  </li>
                  <li>
                    <Link to="/userDetail">Chi tiết</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="login.html">
                  <i className="fa fa-user" />
                  <span>Login Page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default SliderBar;
