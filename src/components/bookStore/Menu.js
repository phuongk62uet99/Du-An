import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (

            <div className="main-menu-area hidden-sm hidden-xs sticky-header-1" id="header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="menu-area">
                                <nav>
                                    <ul>
                                        {/* Trang chu xem nen de khong */}
                                        <li className="active"><a href="index.html">Trang chủ<i className="fa fa-angle-down" /></a>
                                            <div className="sub-menu">
                                                <ul>
                                                    <li><a href="index-2.html">Home-2</a></li>
                                                    <li><a href="index-3.html">Home-3</a></li>
                                                    <li><a href="index-4.html">Home-4</a></li>
                                                    <li><a href="index-5.html">Home-5</a></li>
                                                    <li><a href="index-6.html">Home-6</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="product-details.html">Sách trong nước<i className="fa fa-angle-down" /></a>
                                            <div className="mega-menu">
                                                <span>
                                                    <a href="#" className="title">Văn hoc </a>
                                                    <a href="shop.html">Tiểu thuyết - Truyện ngắn</a>
                                                    <a href="shop.html">Ngôn tình</a>
                                                    <a href="shop.html">Light  Novle</a>
                                                    <a href="shop.html">Truyện ngắn -Tản văn </a>
                                                    <a href="shop.html">Xem thêm ...</a>
                                                    {/* <a href="shop.html">Fashion Jackets</a> */}
                                                </span>
                                                <span>
                                                    <a href="#" className="title">Kinh tế </a>
                                                    <a href="shop.html">Nhân Vật - Bài Học </a>
                                                    <a href="shop.html">Kinh Doanh Quản Trị</a>
                                                    <a href="shop.html">Marketing - Bán Hàng</a>
                                                    <a href="shop.html">Phân Tích Kinh Tế</a>
                                                    <a href="shop.html">Xem thêm ...</a>
                                                    {/* <a href="shop.html">hoodies</a> */}
                                                </span>
                                                <span>
                                                    <a href="#" className="title">Tâm lý kỹ năng sống</a>
                                                    <a href="shop.html"> Kỹ Năng Sống </a>
                                                    <a href="shop.html">Rèn Luyện Nhân Cách</a>
                                                    <a href="shop.html">Tâm Lý </a>
                                                    <a href="shop.html">Sách Cho Tuổi Mới Lớn </a>
                                                    <a href="shop.html"> Xem Thêm...</a>
                                                </span>
                                                <span>
                                                    <a href="#" className="title">NUÔI DẠY CON</a>
                                                    <a href="shop.html"> Cẩm Nang Làm Cha Mẹ </a>
                                                    <a href="shop.html">Phương Pháp Giáo Dục Trẻ </a>
                                                    <a href="shop.html">Phát Triển Trí Tuệ Cho </a>
                                                    <a href="shop.html">Trẻ Phát Triển Kỹ Năng</a>
                                                    <a href="shop.html"> Xem Thêm...</a>
                                                </span>
                                            </div>
                                        </li>
                                        <li><a href="product-details.html">Sách nói<i className="fa fa-angle-down" /></a>
                                            <div className="mega-menu">
                                                <span>
                                                    <a href="#" className="title">Shirts</a>
                                                    <a href="shop.html">Tops &amp; Tees</a>
                                                    <a href="shop.html">Sweaters </a>
                                                    <a href="shop.html">Hoodies</a>
                                                    <a href="shop.html">Jackets &amp; Coats</a>
                                                </span>
                                                <span>
                                                    <a href="#" className="title">Tops &amp; Tees</a>
                                                    <a href="shop.html">Long Sleeve </a>
                                                    <a href="shop.html">Short Sleeve</a>
                                                    <a href="shop.html">Polo Short Sleeve</a>
                                                    <a href="shop.html">Sleeveless</a>
                                                </span>
                                                <span>
                                                    <a href="#" className="title">Jackets</a>
                                                    <a href="shop.html">Sweaters</a>
                                                    <a href="shop.html">Hoodies</a>
                                                    <a href="shop.html">Wedges</a>
                                                    <a href="shop.html">Vests</a>
                                                </span>
                                                <span>
                                                    <a href="#" className="title">Jeans Pants</a>
                                                    <a href="shop.html">Polo Short Sleeve</a>
                                                    <a href="shop.html">Sleeveless</a>
                                                    <a href="shop.html">Graphic T-Shirts</a>
                                                    <a href="shop.html">Hoodies</a>
                                                </span>
                                            </div>
                                        </li>
                                        <li><a href="product-details.html">Sách trẻ em <i className="fa fa-angle-down" /></a>
                                            <div className="mega-menu mega-menu-2">
                                                <span>
                                                    <a href="#" className="title">Tops</a>
                                                    <a href="shop.html">Shirts</a>
                                                    <a href="shop.html">Florals</a>
                                                    <a href="shop.html">Crochet</a>
                                                    <a href="shop.html">Stripes</a>
                                                </span>
                                                <span>
                                                    <a href="#" className="title">Bottoms</a>
                                                    <a href="shop.html">Shorts</a>
                                                    <a href="shop.html">Dresses</a>
                                                    <a href="shop.html">Trousers</a>
                                                    <a href="shop.html">Jeans</a>
                                                </span>
                                                <span>
                                                    <a href="#" className="title">Shoes</a>
                                                    <a href="shop.html">Heeled sandals</a>
                                                    <a href="shop.html">Flat sandals</a>
                                                    <a href="shop.html">Wedges</a>
                                                    <a href="shop.html">Ankle boots</a>
                                                </span>
                                            </div>
                                        </li>
                                        <li><a href="#">Trang<i className="fa fa-angle-down" /></a>
                                            <div className="sub-menu sub-menu-2">
                                                <ul>
                                                    <li><a href="shop.html">shop</a></li>
                                                    <li><a href="product-details.html">product-details</a></li>
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="blog-details.html">blog-details</a></li>
                                                    <li><a href="contact.html">contact</a></li>
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="register.html">register</a></li>
                                                    <li><a href="cart.html">cart</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                    <li><a href="404.html">404 Page</a></li>
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

        );
    }

}

export default Menu;



