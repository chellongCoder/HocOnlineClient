import React, { Component } from "react";
import Login from "./Login";
import LoginContainer from "../container/LoginContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegisterContainer from "../container/RegisterContainer";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.componentRoot = RegisterContainer;
  }
  render() {
    return <Router>
        <div>
          <Route exact path="/" component={this.componentRoot} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          {/* <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>;
  }
}
