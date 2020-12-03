import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

class Besteller extends Component {
  render() {
    return (
      <div className="bestseller-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="bestseller-content">
                <h1>Author best selling</h1>
                <h2>
                  J. K. <br />
                  Rowling
                </h2>
                <p className="categories">
                  categories:<a href="#">Books</a> , <a href="#">Audiobooks</a>
                </p>
                <p>
                  Vestibulum porttitor iaculis gravida. Praesent vestibulum
                  varius placerat. Cras tempor congue neque, id aliquam orci
                  finibus sit amet. Fusce at facilisis arcu. Donec aliquet nulla
                  id turpis semper, a bibendum metus vulputate. Suspendisse
                  potenti.
                </p>
                <div className="social-author">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="banner-img-2">
                <a href="#">
                  <img src="asset-client/img/banner/6.jpg" alt="banner" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="bestseller-active owl-carousel">
                <div className="bestseller-total">
                  <div className="single-bestseller mb-25">
                    <div className="bestseller-img">
                      <a href="#">
                        <img src="asset-client/img/product/13.jpg" alt="book" />
                      </a>
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
                    <div className="bestseller-text text-center">
                      <h3>
                        <a href="#">Rival Messenger</a>
                      </h3>
                      <div className="price">
                        <ul>
                          <li>
                            <span className="new-price">$40.00</span>
                          </li>
                          <li>
                            <span className="old-price">$45.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-bestseller">
                    <div className="bestseller-img">
                      <a href="#">
                        <img src="asset-client/img/product/14.jpg" alt="book" />
                      </a>
                      <div className="product-flag">
                        <ul>
                          <li>
                            <span className="sale">new</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bestseller-text text-center">
                      <h3>
                        <a href="#">Impulse Duffle</a>
                      </h3>
                      <div className="price">
                        <ul>
                          <li>
                            <span className="new-price">$70.00</span>
                          </li>
                          <li>
                            <span className="old-price">$74.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bestseller-total">
                  <div className="single-bestseller mb-25">
                    <div className="bestseller-img">
                      <a href="#">
                        <img src="asset-client/img/product/15.jpg" alt="book" />
                      </a>
                      <div className="product-flag">
                        <ul>
                          <li>
                            <span className="sale">new</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bestseller-text text-center">
                      <h3>
                        <a href="#">Voyage Yoga Bag</a>
                      </h3>
                      <div className="price">
                        <ul>
                          <li>
                            <span className="new-price">$30.00</span>
                          </li>
                          <li>
                            <span className="old-price">$32.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-bestseller">
                    <div className="bestseller-img">
                      <a href="#">
                        <img src="asset-client/img/product/16.jpg" alt="book" />
                      </a>
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
                    <div className="bestseller-text text-center">
                      <h3>
                        <a href="#">Compete Track Tote</a>
                      </h3>
                      <div className="price">
                        <ul>
                          <li>
                            <span className="new-price">$32.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bestseller-total">
                  <div className="single-bestseller mb-25">
                    <div className="bestseller-img">
                      <a href="#">
                        <img src="asset-client/img/product/17.jpg" alt="book" />
                      </a>
                      <div className="product-flag">
                        <ul>
                          <li>
                            <span className="sale">new</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bestseller-text text-center">
                      <h3>
                        <a href="#">Fusion Backpack</a>
                      </h3>
                      <div className="price">
                        <ul>
                          <li>
                            <span className="new-price">$59.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-bestseller">
                    <div className="bestseller-img">
                      <a href="#">
                        <img src="asset-client/img/product/14.jpg" alt="book" />
                      </a>
                      <div className="product-flag">
                        <ul>
                          <li>
                            <span className="sale">new</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bestseller-text text-center">
                      <h3>
                        <a href="#">Impulse Duffle</a>
                      </h3>
                      <div className="price">
                        <ul>
                          <li>
                            <span className="new-price">$70.00</span>
                          </li>
                          <li>
                            <span className="old-price">$74.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Besteller;
