import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="banner-area banner-res-large ptb-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div className="single-banner">
                <div className="banner-img">
                  <a href="#">
                    <img src="asset-client/img/banner/1.png" alt="banner" />
                  </a>
                </div>
                <div className="banner-text">
                  <h4>Miễn phí vận chuyển</h4>
                  <p>Đối với đơn hàng trên 100.000 VNĐ</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div className="single-banner">
                <div className="banner-img">
                  <a href="#">
                    <img src="asset-client/img/banner/2.png" alt="banner" />
                  </a>
                </div>
                <div className="banner-text">
                  <h4>Đẩm bảo lại tiền</h4>
                  <p>Đảm bảo hoàn tiền 100%</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 hidden-sm col-xs-12">
              <div className="single-banner">
                <div className="banner-img">
                  <a href="#">
                    <img src="asset-client/img/banner/3.png" alt="banner" />
                  </a>
                </div>
                <div className="banner-text">
                  <h4>Thanh toán khi giao hàng</h4>
                  <p>Kiểm tra đơn hàng trước khi nhận hàng</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div className="single-banner mrg-none-xs">
                <div className="banner-img">
                  <a href="#">
                    <img src="asset-client/img/banner/4.png" alt="banner" />
                  </a>
                </div>
                <div className="banner-text">
                  <h4>Chăm sóc khác hàng</h4>
                  <p>Liên hệ : + 0123.4567.89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
