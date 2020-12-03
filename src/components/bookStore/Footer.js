import React, { Component } from "react";
// import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-top-menu bb-2">
                  <nav>
                    <ul>
                      <li>
                        <a href="#">Trang chủ</a>
                      </li>
                      <li>
                        <a href="#">đăng nhập</a>
                      </li>
                      <li>
                        <a href="#">Chính sách về quyền riêng tư</a>
                      </li>
                      <li>
                        <a href="#">Liên hệ với chúng tôi</a>
                      </li>
                      <li>
                        <a href="#">blog</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-mid ptb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="single-footer br-2 xs-mb">
                      <div className="footer-title mb-20">
                        <h3>Sản phẩm</h3>
                      </div>
                      <div className="footer-mid-menu">
                        <ul>
                          <li>
                            <a href="about.html">Về chúng tôi</a>
                          </li>
                          <li>
                            <a href="#">Sản phẩm mới</a>
                          </li>
                          <li>
                            <a href="#">Giảm giá mạnh</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="single-footer br-2 xs-mb">
                      <div className="footer-title mb-20">
                        <h3>Cửa hàng của chúng tôi </h3>
                      </div>
                      <div className="footer-mid-menu">
                        <ul>
                          <li>
                            <a href="contact.html">Liên hệ với chúng tôi</a>
                          </li>
                          <li>
                            <a href="#">Của hàng</a>
                          </li>
                          <li>
                            <a href="register.html">Tài khoản của tôi</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="single-footer br-2 xs-mb">
                      <div className="footer-title mb-20">
                        <h3>Tài khoản của NVA</h3>
                      </div>
                      <div className="footer-mid-menu">
                        <ul>
                          <li>
                            <a href="contact.html">Addresses</a>
                          </li>
                          <li>
                            <a href="#">Credit slips </a>
                          </li>
                          <li>
                            <a href="#"> Orders</a>
                          </li>
                          <li>
                            <a href="#">Personal info</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="single-footer mrg-sm">
                  <div className="footer-title mb-20">
                    <h3>Thông tin </h3>
                  </div>
                  <div className="footer-contact">
                    <p className="adress">
                      <span>của hàng của tôi </span>
                      Số 1 Đường Xuân Thủy - Cầu Giấy - Hà Nội
                    </p>
                    <p>
                      <span>Điện thoại:</span> (+1)866-540-3229
                    </p>
                    <p>
                      <span>Email:</span> support@hastech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row bt-2">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"></div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="payment-img text-right">
                  <a href="#">
                    <img src="asset-client/img/1.png" alt="payment" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
