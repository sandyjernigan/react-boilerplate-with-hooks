import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
    </Switch>
  );
}
  
export default Routes;
