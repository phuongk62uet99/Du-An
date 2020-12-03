import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import SliderBar from "./SliderBar";
import { BrowserRouter as Router } from "react-router-dom";

class AppAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      listBooks: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:1234/api/v1/book/books/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            // isLoaded: true,
            // items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <Router>
        <section id="container">
          <Header></Header>
          <SliderBar />
          <Content></Content>
        </section>
      </Router>
    );
  }
}

export default AppAdmin;
