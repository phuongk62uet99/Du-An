import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

class NewBooks extends Component {
  render() {
    return (
      <div className="new-book-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title bt text-center pt-100 mb-30 section-title-res">
                <h2>Sách nổi bật</h2>
              </div>
            </div>
          </div>
          <div className="tab-active owl-carousel">
            <div className="tab-total">
              {/* single-product-start */}
              <div className="product-wrapper mb-40">
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
              <div className="product-wrapper">
                <div className="product-img">
                  <a href="#">
                    <img
                      src="asset-client/img/product/18.jpg"
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
                    <a href="#">Driven Backpack</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$34.00</li>
                      <li className="old-price">$36.00</li>
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
            <div className="tab-total">
              {/* single-product-start */}
              <div className="product-wrapper mb-40">
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
              <div className="product-wrapper">
                <div className="product-img">
                  <a href="#">
                    <img
                      src="asset-client/img/product/10.jpg"
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
                    <a href="#">Fusion Backpack</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$59.00</li>
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
            <div className="tab-total">
              {/* single-product-start */}
              <div className="product-wrapper mb-40">
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
                      src="asset-client/img/product/19.jpg"
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
                    <a href="#">Compete Track Tote</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$32.00</li>
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
            <div className="tab-total">
              {/* single-product-start */}
              <div className="product-wrapper mb-40">
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
                      src="asset-client/img/product/4.jpg"
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
            </div>
            <div className="tab-total">
              {/* single-product-start */}
              <div className="product-wrapper mb-40">
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
                      <li className="old-price">$40.00</li>
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
                      src="asset-client/img/product/8.jpg"
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
                    <a href="#">Rival Messenger</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$35.00</li>
                      <li className="old-price">$40.00</li>
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
            <div className="tab-total">
              {/* single-product-start */}
              <div className="product-wrapper mb-40">
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
                      <li className="old-price">$78.00</li>
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
                    <a href="#">Crown Summit</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$36.00</li>
                      <li className="old-price">$38.00</li>
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
      </div>
    );
  }
}

export default NewBooks;
