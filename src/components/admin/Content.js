import React, { Component } from "react";
import routes from "./routes/Routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <section id="main-content">
        <section className="wrapper">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </section>
        <div className="footer">
          <div className="wthree-copyright">
            <p>
              Nguyen Van Phuong neww<a href="http://w3layouts.com">W3layouts</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
