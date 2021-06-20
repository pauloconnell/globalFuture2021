import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Food from "../pages/food";
import { Link } from "wouter";

/*
The router is imported in app.jsx

Our site just has two routes in it–Home and About
- Each one is defined as a component in /pages
- We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
  <div className="container">
    <div id="main">
      <center>
        <h1>
          Global Future: <br />
          World Unity
          <br />
          <u>The Master Plan:</u>
        </h1>
      </center>
      <div className="row">
        <center>
          <a href="/population">
            <button id="population">Population Plan</button>
          </a>
          <a href="/climate">
            <button id="climate">Climate Management</button>
          </a>
          <button>
            <Link href="/food">Food</Link>
          </button>
          <a href="/packaging">
            {" "}
            <button id="packaging">Packaging</button>
          </a>
          <a href="/plastics">
            {" "}
            <button id="plastics">Plastics</button>
          </a>
          <a href="/transport">
            <button id="transport">Transportation/Travel</button>
          </a>
          <a href="/water">
            {" "}
            <button id="water">Water Management</button>
          </a>
          <a href="/infr">
            <button id="infrastructure">Infrastructure</button>
          </a>
        </center>
      </div>
    </div>
  </div>
);
