import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Users from "./containers/Users";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const Pizza = asyncComponent(() => import("./containers/Pizza"));

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" exact component={Pizza} />
        </div>
      </div>
    );
  }
}

export default App;
