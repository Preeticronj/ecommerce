import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Body from "./Body/Body";
import Detail from "./Detail";
import Cart from "./Cart";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/Detail" component={Detail} />
          <Route path="/Cart" component={Cart} />
        
        </Switch>
      </div>
    );
  }
}
export default Routes;
