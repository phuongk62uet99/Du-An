import AppClinet from "./components/bookStore/AppClinet";
import AppAdmin from "./components/admin/AppAdmin";
// import App

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return <AppAdmin></AppAdmin>;
  }
}

export default App;
