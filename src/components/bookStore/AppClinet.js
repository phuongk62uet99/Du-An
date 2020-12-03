import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Banner from "./Banner";
import Product from "./Product";
import Footer from "./Footer";
import Slider from "./Slider";
import { BrowserRouter as Router } from "react-router-dom";
import check from "./check";
import Besteller from "./Besteller";

class AppClinet extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Banner></Banner>
        <Slider></Slider>
        <Product></Product>
        <check></check>
        <Besteller></Besteller>
      </Router>
    );
  }
}

export default AppClinet;
