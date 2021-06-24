import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Food from "../pages/food";
import Packaging from "../pages/packaging";
import { Link } from "wouter";

/*
The router is imported in app.jsx

Our site just has two routes in it–Home and About
- Each one is defined as a component in /pages
- We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
  <div>
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

            <button>
              <Link href="/packaging">Packaging</Link>
            </button>
            <button>
              <Link href="/plastics">Plastics</Link>
            </button>

            <button>
              <Link href="/transport">transport</Link>
            </button>

            <button>
              <Link href="/water">Water</Link>
            </button>

            <button>
              <Link href="/infr">infra</Link>
            </button>
          </center>
        </div>
      </div>
    </div>
  </div>
);
