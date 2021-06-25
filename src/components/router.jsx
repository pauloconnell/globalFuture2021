import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Food from "../pages/food";
import Packaging from "../pages/packaging";
import Climate from "../pages/climate";
import Water from "../pages/water";

/*
The router is imported in app.jsx

Our site just has two routes in it–Home and About
- Each one is defined as a component in /pages
- We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/food" component={Food} />
    <Route path="/packaging" component={Packaging} />
    <Route path="/climate" component={Climate} />
    <Route path="/water" component={Water} />
    
  </Switch>
);
