import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      
  <div className="product-area pt-95 xs-mb">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title text-center mb-50">
          <h2>Sách bán chạy</h2>
          <p>
            Các sản phẩm bán chạy nhất và hàng đầu của chúng tôi. <br />
            Các sản phẩm mà bạn đang tìm kiếm
          </p>
        </div>
      </div>
      <div className="col-lg-12">
        {/* tab-menu-start */}
        <div className="tab-menu mb-40 text-center">
          <ul>
            <li className="active">
              <a href="#Audiobooks" data-toggle="tab">
                Sách mới{" "}
              </a>
            </li>
            <li>
              <a href="#books" data-toggle="tab">
                Sách đang giảm giá
              </a>
            </li>
            <li>
              <a href="#bussiness" data-toggle="tab">
                Sách nổi bật
              </a>
            </li>
          </ul>
        </div>
        {/* tab-menu-end */}
      </div>
    </div>
    {/* tab-area-start */}
    <div className="tab-content">
      <div className="tab-pane active" id="Audiobooks">
        <div className="tab-active owl-carousel">
          {/* single-product-start */}
          {/* sp 1 */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/1.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span>
                  </li>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Joust Duffle Bag</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$60.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          {/* sp 2 */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/3.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span> <br />
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Chaz Kangeroo Hoodie</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$52.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          {/* sp 3 */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/5.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span> <br />
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Set of Sprite Yoga Straps</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$34.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* sp 4 */}
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/7.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span> <br />
                  </li>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Strive Shoulder Pack</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$30.00</li>
                  <li className="old-price">$32.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          {/* sp 5 */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/9.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Wayfarer Messenger Bag</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$35.00</li>
                  <li className="old-price">40.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          {/* sp 6 */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/11.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span> <br />
                  </li>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Impulse Duffle</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$74.00</li>
                  <li className="old-price">78.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
        </div>
      </div>
      <div className="tab-pane fade" id="books">
        <div className="tab-active owl-carousel">
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/5.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Strive Shoulder Pack</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$30.00</li>
                  <li className="old-price">$32.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/7.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Strive Shoulder Pack</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$30.00</li>
                  <li className="old-price">$32.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/1.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Joust Duffle Bag</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$60.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/3.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span> <br />
                  </li>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Chaz Kangeroo Hoodie</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$52.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/9.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span> <br />
                  </li>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Wayfarer Messenger Bag</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$35.00</li>
                  <li className="old-price">40.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/11.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Impulse Duffle</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$74.00</li>
                  <li className="old-price">78.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
        </div>
      </div>
      <div className="tab-pane fade" id="bussiness">
        <div className="tab-active owl-carousel">
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/9.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span> <br />
                  </li>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Wayfarer Messenger Bag</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$35.00</li>
                  <li className="old-price">40.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/11.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Impulse Duffle</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$74.00</li>
                  <li className="old-price">78.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/1.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span> <br />
                  </li>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Joust Duffle Bag</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$60.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/3.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Chaz Kangeroo Hoodie</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$52.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/5.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="sale">new</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Set of Sprite Yoga Straps</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$34.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
          {/* single-product-start */}
          <div className="product-wrapper">
            <div className="product-img">
              <a href="#">
                <img
                  src="asset-client/img/product/7.jpg"
                  alt="book"
                  className="primary"
                />
              </a>
              <div className="quick-view">
                <a
                  className="action-view"
                  href="#"
                  data-target="#productModal"
                  data-toggle="modal"
                  title="Quick View"
                >
                  <i className="fa fa-search-plus" />
                </a>
              </div>
              <div className="product-flag">
                <ul>
                  <li>
                    <span className="discount-percentage">-5%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details text-center">
              <div className="product-rating">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href="#">Strive Shoulder Pack</a>
              </h4>
              <div className="product-price">
                <ul>
                  <li>$30.00</li>
                  <li className="old-price">$32.00</li>
                </ul>
              </div>
            </div>
            <div className="product-link">
              <div className="product-button">
                <a href="#" title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
              <div className="add-to-link">
                <ul>
                  <li>
                    <a href="product-details.html" title="Details">
                      <i className="fa fa-external-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* single-product-end */}
        </div>
      </div>
    </div>
    {/* tab-area-end */}
  </div>
</div>

   
   );
  }
}

export default Product;
