<div>
  <header>
    <div className="header-top-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" />
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="account-area text-right">
              <ul>
                <li>
                  <a href="register.html">Tài khoản của tôi</a>
                </li>
                <li>
                  <a href="checkout.html">Thanh Toán</a>
                </li>
                <li>
                  <a href="login.html">Đăng nhập</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* header-top-area-end */}
    {/* header-mid-area-start */}
    <div className="header-mid-area ptb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div className="logo-area text-center logo-xs-mrg">
              <a href="index.html">
                <img src="asset-client/img/logo/logo.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
            <div className="header-search">
              <form action="#">
                <input type="text" placeholder="Search entire store here..." />
                <a href="#">
                  <i className="fa fa-search" />
                </a>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="my-cart">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-cart" />
                    Giỏ hàng
                  </a>
                  <span>2</span>
                  <div className="mini-cart-sub">
                    <div className="cart-product">
                      <div className="single-cart">
                        <div className="cart-img">
                          <a href="#">
                            <img
                              src="asset-client/img/product/1.jpg"
                              alt="book"
                            />
                          </a>
                        </div>
                        <div className="cart-info">
                          <h5>
                            <a href="#">Joust Duffle Bag</a>
                          </h5>
                          <p>1 x £60.00</p>
                        </div>
                        <div className="cart-icon">
                          <a href="#">
                            <i className="fa fa-remove" />
                          </a>
                        </div>
                      </div>
                      <div className="single-cart">
                        <div className="cart-img">
                          <a href="#">
                            <img
                              src="asset-client/img/product/3.jpg"
                              alt="book"
                            />
                          </a>
                        </div>
                        <div className="cart-info">
                          <h5>
                            <a href="#">Chaz Kangeroo Hoodie</a>
                          </h5>
                          <p>1 x £52.00</p>
                        </div>
                        <div className="cart-icon">
                          <a href="#">
                            <i className="fa fa-remove" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="cart-totals">
                      <h5>
                        Total <span>£12.00</span>
                      </h5>
                    </div>
                    <div className="cart-bottom">
                      <a className="view-cart" href="cart.html">
                        view cart
                      </a>
                      <a href="checkout.html">Check out</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* header-mid-area-end */}
    {/* main-menu-area-start */}
    <div
      className="main-menu-area hidden-sm hidden-xs sticky-header-1"
      id="header-sticky"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="menu-area">
              <nav>
                <ul>
                  {/* Trang chu xem nen de khong */}
                  <li className="active">
                    <a href="index.html">
                      Trang chủ
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="index-2.html">Home-2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home-3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home-4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home-5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home-6</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="product-details.html">
                      Sách trong nước
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="mega-menu">
                      <span>
                        <a href="#" className="title">
                          Văn hoc{" "}
                        </a>
                        <a href="shop.html">Tiểu thuyết - Truyện ngắn</a>
                        <a href="shop.html">Ngôn tình</a>
                        <a href="shop.html">Light Novle</a>
                        <a href="shop.html">Truyện ngắn -Tản văn </a>
                        <a href="shop.html">Xem thêm ...</a>
                        {/* <a href="shop.html">Fashion Jackets</a> */}
                      </span>
                      <span>
                        <a href="#" className="title">
                          Kinh tế{" "}
                        </a>
                        <a href="shop.html">Nhân Vật - Bài Học </a>
                        <a href="shop.html">Kinh Doanh Quản Trị </a>
                        <a href="shop.html">Marketing - Bán Hàng</a>
                        <a href="shop.html">Phân Tích Kinh Tế</a>
                        <a href="shop.html">Xem thêm ...</a>
                        {/* <a href="shop.html">hoodies</a> */}
                      </span>
                      <span>
                        <a href="#" className="title">
                          Tâm lý kỹ năng sống
                        </a>
                        <a href="shop.html"> Kỹ Năng Sống </a>
                        <a href="shop.html">Rèn Luyện Nhân Cách</a>
                        <a href="shop.html">Tâm Lý </a>
                        <a href="shop.html">Sách Cho Tuổi Mới Lớn </a>
                        <a href="shop.html"> Xem Thêm...</a>
                      </span>
                      <span>
                        <a href="#" className="title">
                          NUÔI DẠY CON
                        </a>
                        <a href="shop.html"> Cẩm Nang Làm Cha Mẹ </a>
                        <a href="shop.html">Phương Pháp Giáo Dục Trẻ </a>
                        <a href="shop.html">Phát Triển Trí Tuệ Cho </a>
                        <a href="shop.html">Trẻ Phát Triển Kỹ Năng</a>
                        <a href="shop.html"> Xem Thêm...</a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <a href="product-details.html">
                      Sách nói
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="mega-menu">
                      <span>
                        <a href="#" className="title">
                          Shirts
                        </a>
                        <a href="shop.html">Tops &amp; Tees</a>
                        <a href="shop.html">Sweaters </a>
                        <a href="shop.html">Hoodies</a>
                        <a href="shop.html">Jackets &amp; Coats</a>
                      </span>
                      <span>
                        <a href="#" className="title">
                          Tops &amp; Tees
                        </a>
                        <a href="shop.html">Long Sleeve </a>
                        <a href="shop.html">Short Sleeve</a>
                        <a href="shop.html">Polo Short Sleeve</a>
                        <a href="shop.html">Sleeveless</a>
                      </span>
                      <span>
                        <a href="#" className="title">
                          Jackets
                        </a>
                        <a href="shop.html">Sweaters</a>
                        <a href="shop.html">Hoodies</a>
                        <a href="shop.html">Wedges</a>
                        <a href="shop.html">Vests</a>
                      </span>
                      <span>
                        <a href="#" className="title">
                          Jeans Pants
                        </a>
                        <a href="shop.html">Polo Short Sleeve</a>
                        <a href="shop.html">Sleeveless</a>
                        <a href="shop.html">Graphic T-Shirts</a>
                        <a href="shop.html">Hoodies</a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <a href="product-details.html">
                      Sách trẻ em <i className="fa fa-angle-down" />
                    </a>
                    <div className="mega-menu mega-menu-2">
                      <span>
                        <a href="#" className="title">
                          Tops
                        </a>
                        <a href="shop.html">Shirts</a>
                        <a href="shop.html">Florals</a>
                        <a href="shop.html">Crochet</a>
                        <a href="shop.html">Stripes</a>
                      </span>
                      <span>
                        <a href="#" className="title">
                          Bottoms
                        </a>
                        <a href="shop.html">Shorts</a>
                        <a href="shop.html">Dresses</a>
                        <a href="shop.html">Trousers</a>
                        <a href="shop.html">Jeans</a>
                      </span>
                      <span>
                        <a href="#" className="title">
                          Shoes
                        </a>
                        <a href="shop.html">Heeled sandals</a>
                        <a href="shop.html">Flat sandals</a>
                        <a href="shop.html">Wedges</a>
                        <a href="shop.html">Ankle boots</a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      Trang
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="sub-menu sub-menu-2">
                      <ul>
                        <li>
                          <a href="shop.html">shop</a>
                        </li>
                        <li>
                          <a href="product-details.html">product-details</a>
                        </li>
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog-details</a>
                        </li>
                        <li>
                          <a href="contact.html">contact</a>
                        </li>
                        <li>
                          <a href="about.html">about</a>
                        </li>
                        <li>
                          <a href="login.html">login</a>
                        </li>
                        <li>
                          <a href="register.html">register</a>
                        </li>
                        <li>
                          <a href="cart.html">cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">checkout</a>
                        </li>
                        <li>
                          <a href="wishlist.html">wishlist</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="safe-area">
              <a href="product-details.html">sales off</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Cat tu day tro len */}
    {/* <a href="product-details.html">sales off</a> */}
    {/* main-menu-area-end */}
    {/* mobile-menu-area-start */}
    {/* Xong thanh menu */}
    <div className="mobile-menu-area hidden-md hidden-lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mobile-menu">
              <nav id="mobile-menu-active">
                <ul id="nav">
                  <li>
                    <a href="index.html">Home</a>
                    <ul>
                      <li>
                        <a href="index-2.html">Home-2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home-3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home-4</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home-5</a>
                      </li>
                      <li>
                        <a href="index-6.html">Home-6</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product-details.html">Sách </a>
                    <ul>
                      <li>
                        <a href="shop.html">Tops &amp; Tees</a>
                      </li>
                      <li>
                        <a href="shop.html">Polo Short Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Graphic T-Shirts</a>
                      </li>
                      <li>
                        <a href="shop.html">Jackets &amp; Coats</a>
                      </li>
                      <li>
                        <a href="shop.html">Fashion Jackets</a>
                      </li>
                      <li>
                        <a href="shop.html">Crochet</a>
                      </li>
                      <li>
                        <a href="shop.html">Sleeveless</a>
                      </li>
                      <li>
                        <a href="shop.html">Stripes</a>
                      </li>
                      <li>
                        <a href="shop.html">Sweaters</a>
                      </li>
                      <li>
                        <a href="shop.html">hoodies</a>
                      </li>
                      <li>
                        <a href="shop.html">Heeled sandals</a>
                      </li>
                      <li>
                        <a href="shop.html">Polo Short Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Flat sandals</a>
                      </li>
                      <li>
                        <a href="shop.html">Short Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Long Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Polo Short Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Sleeveless</a>
                      </li>
                      <li>
                        <a href="shop.html">Graphic T-Shirts</a>
                      </li>
                      <li>
                        <a href="shop.html">Hoodies</a>
                      </li>
                      <li>
                        <a href="shop.html">Jackets</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product-details.html">Sách nói </a>
                    <ul>
                      <li>
                        <a href="shop.html">Tops &amp; Tees</a>
                      </li>
                      <li>
                        <a href="shop.html">Sweaters</a>
                      </li>
                      <li>
                        <a href="shop.html">Hoodies</a>
                      </li>
                      <li>
                        <a href="shop.html">Jackets &amp; Coats</a>
                      </li>
                      <li>
                        <a href="shop.html">Long Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Short Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Polo Short Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Sleeveless</a>
                      </li>
                      <li>
                        <a href="shop.html">Sweaters</a>
                      </li>
                      <li>
                        <a href="shop.html">Hoodies</a>
                      </li>
                      <li>
                        <a href="shop.html">Wedges</a>
                      </li>
                      <li>
                        <a href="shop.html">Vests</a>
                      </li>
                      <li>
                        <a href="shop.html">Polo Short Sleeve</a>
                      </li>
                      <li>
                        <a href="shop.html">Sleeveless</a>
                      </li>
                      <li>
                        <a href="shop.html">Graphic T-Shirts</a>
                      </li>
                      <li>
                        <a href="shop.html">Hoodies</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product-details.html">Sách thiếu nhi</a>
                    <ul>
                      <li>
                        <a href="shop.html">Shirts</a>
                      </li>
                      <li>
                        <a href="shop.html">Florals</a>
                      </li>
                      <li>
                        <a href="shop.html">Crochet</a>
                      </li>
                      <li>
                        <a href="shop.html">Stripes</a>
                      </li>
                      <li>
                        <a href="shop.html">Shorts</a>
                      </li>
                      <li>
                        <a href="shop.html">Dresses</a>
                      </li>
                      <li>
                        <a href="shop.html">Trousers</a>
                      </li>
                      <li>
                        <a href="shop.html">Jeans</a>
                      </li>
                      <li>
                        <a href="shop.html">Heeled sandals</a>
                      </li>
                      <li>
                        <a href="shop.html">Flat sandals</a>
                      </li>
                      <li>
                        <a href="shop.html">Wedges</a>
                      </li>
                      <li>
                        <a href="shop.html">Ankle boots</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">blog-details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product-details.html">Trang</a>
                    <ul>
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="product-details.html">product-details</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">blog-details</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* mobile-menu-area-end */}
  </header>
  {/* header-area-end */}
  {/* banner-area-start */}
  {/* Thanh lien he  */}

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

  {/* Slider bar */}

  <div className="slider-area">
    <div className="slider-active owl-carousel">
      <div
        className="single-slider pt-125 pb-130 bg-img"
        style={{ backgroundImage: "url(asset-client/img/slider/1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="slider-content slider-animated-1 text-center">
                <h1>Huge Sale</h1>
                <h2>koparion</h2>
                <h3>Now starting at £99.00</h3>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="single-slider slider-h1-2 pt-215 pb-100 bg-img"
        style={{ backgroundImage: "url(asset-client/img/slider/2.jpg)" }}
      >
        <div className="container">
          <div className="slider-content slider-content-2 slider-animated-1">
            <h1>We can help get your</h1>
            <h2>Books in Order</h2>
            <h3>and Accessories</h3>
            <a href="#">Contact Us Today!</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* slider-area-end */}
  {/* product-area-start */}
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
  {/* product-area-end */}
  {/* banner-area-start */}
  <div className="banner-area-5 mtb-95">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-img-2">
            <a href="#">
              <img src="asset-client/img/banner/5.jpg" alt="banner" />
            </a>
            <div className="banner-text">
              <h3>G. Meyer Books &amp; Spiritual Traveler Press</h3>
              <h2>Sale up to 30% off</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* banner-area-end */}
  {/* bestseller-area-start */}
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
              Vestibulum porttitor iaculis gravida. Praesent vestibulum varius
              placerat. Cras tempor congue neque, id aliquam orci finibus sit
              amet. Fusce at facilisis arcu. Donec aliquet nulla id turpis
              semper, a bibendum metus vulputate. Suspendisse potenti.
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
  {/* bestseller-area-end */}
  {/* new-book-area-start */}
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
  {/* new-book-area-start */}
  {/* banner-static-area-start */}
  {/* Minh hoa mot so sach noi bat hay ơ day  */}
  <div className="banner-static-area bg ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="banner-shadow-hover xs-mb">
            <a href="#">
              <img src="asset-client/img/banner/8.jpg" alt="banner" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="banner-shadow-hover">
            <a href="#">
              <img src="asset-client/img/banner/9.jpg" alt="banner" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* banner-static-area-end */}
  {/* most-product-area-start */}
  <div className="most-product-area pt-90 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 xs-mb">
          <div className="section-title-2 mb-30">
            <h3>Sách</h3>
          </div>
          <div className="product-active-2 owl-carousel">
            <div className="product-total-2">
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/20.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Endeavor Daytrip</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$30.00</li>
                      <li className="old-price">$33.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/21.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Savvy Shoulder Tote</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$30.00</li>
                      <li className="old-price">$35.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/22.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                      <li>$35.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-total-2">
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/23.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Voyage Yoga Bag</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$30.00</li>
                      <li className="old-price">$33.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/24.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                      <li>$70.00</li>
                      <li className="old-price">$74.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/22.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 xs-mb">
          <div className="section-title-2 mb-30">
            <h3>Sách nói</h3>
          </div>
          <div className="product-active-2 owl-carousel">
            <div className="product-total-2">
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/23.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Voyage Yoga Bag</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$30.00</li>
                      <li className="old-price">$33.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/24.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                      <li>$70.00</li>
                      <li className="old-price">$74.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/26.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Driven Backpack1</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$40.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-total-2">
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/20.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Endeavor Daytrip</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$30.00</li>
                      <li className="old-price">$33.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/21.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Savvy Shoulder Tote</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$30.00</li>
                      <li className="old-price">$35.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/22.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                      <li>$35.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
          <div className="section-title-2 mb-30">
            <h3>Sách trẻ em</h3>
          </div>
          <div className="product-active-2 owl-carousel">
            <div className="product-total-2">
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/27.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
              </div>
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/28.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
              </div>
              <div className="single-most-product">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/29.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Endeavor Daytrip</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$30.00</li>
                      <li className="old-price">$33.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-total-2">
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/23.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                    <a href="#">Voyage Yoga Bag</a>
                  </h4>
                  <div className="product-price">
                    <ul>
                      <li>$30.00</li>
                      <li className="old-price">$33.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product bd mb-18">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/24.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
                      <li>$70.00</li>
                      <li className="old-price">$74.00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-most-product">
                <div className="most-product-img">
                  <a href="#">
                    <img src="asset-client/img/product/22.jpg" alt="book" />
                  </a>
                </div>
                <div className="most-product-content">
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
              </div>
            </div>
          </div>
        </div>
        {/* chưa biết sửa như thế nào  */}
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="block-newsletter">
            <h2>Sign up for send newsletter</h2>
            <p>You can be always up to date with our company new!</p>
            <form action="#">
              <input type="text" placeholder="Enter your email address" />
            </form>
            <a href="#">Send Email</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Slide sửa text sao cho hợp lý */}
  <div className="testimonial-area ptb-100 bg">
    <div className="container">
      <div className="row">
        <div className="testimonial-active owl-carousel">
          <div className="col-lg-12">
            <div className="single-testimonial text-center">
              <div className="testimonial-img">
                <a href="#">
                  <i className="fa fa-quote-right" />
                </a>
              </div>
              <div className="testimonial-text">
                <p>
                  I'm so happy with all of the themes, great support, could not
                  wish for more. These people are <br />
                  geniuses ! Kudo's from the Netherlands !
                </p>
                <a href="#">Sandy Wilcke/user</a>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="single-testimonial text-center">
              <div className="testimonial-img">
                <a href="#">
                  <i className="fa fa-quote-right" />
                </a>
              </div>
              <div className="testimonial-text">
                <p>
                  All Perfect !! I have three sites with magento , this theme is
                  the best !! Excellent support ,<br />
                  advice theme installation package , sorry for English, are
                  Italian but I had no problem !! Thank you !
                </p>
                <a href="#">Sandy Wilcke/user</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Sua text trong tung ô  */}
  <div className="recent-post-area pt-95 pb-100">
    <div className="container">
      <div className="row" />
    </div>
  </div>

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
                    <h3>Cửa hàng của chúng tôi</h3>
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
                <h3>Thông tin</h3>
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
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" />
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
    {/* footer-bottom-end */}
  </footer>

  <div className="modal fade" id="productModal" tabIndex={-1} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">x</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12">
              <div className="modal-tab">
                <div className="product-details-large tab-content">
                  <div className="tab-pane active" id="image-1">
                    <img
                      src="asset-client/img/product/quickview-l4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="tab-pane" id="image-2">
                    <img
                      src="asset-client/img/product/quickview-l2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="tab-pane" id="image-3">
                    <img
                      src="asset-client/img/product/quickview-l3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="tab-pane" id="image-4">
                    <img
                      src="asset-client/img/product/quickview-l5.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="product-details-small quickview-active owl-carousel">
                  <a className="active" href="#image-1">
                    <img
                      src="asset-client/img/product/quickview-s4.jpg"
                      alt=""
                    />
                  </a>
                  <a href="#image-2">
                    <img
                      src="asset-client/img/product/quickview-s2.jpg"
                      alt=""
                    />
                  </a>
                  <a href="#image-3">
                    <img
                      src="asset-client/img/product/quickview-s3.jpg"
                      alt=""
                    />
                  </a>
                  <a href="#image-4">
                    <img
                      src="asset-client/img/product/quickview-s5.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-7 col-xs-12">
              <div className="modal-pro-content">
                <h3>Nhà giả kim</h3>
                <div className="price">
                  <span>700.000 VNĐ</span>
                </div>
                <p>
                  Giới thiệu về cuốn sách senectus et netus et malesuada fames
                  ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                  ultricies eget, tempor sit amet.
                </p>
                <div className="quick-view-select">
                  <div className="select-option-part">
                    <label>Tác giả : Nguyễn Văn A</label>
                  </div>
                </div>
                <form action="#">
                  <input type="number" defaultValue={1} />
                  <button>Add to cart</button>
                </form>
                <span>
                  <i className="fa fa-check" /> Còn sẵn trong kho
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Modal end */}
</div>;
