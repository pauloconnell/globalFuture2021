import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";

/*
The router is imported in app.jsx

Our site just has two routes in it–Home and About
- Each one is defined as a component in /pages
- We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
  <div className="container">
    <div id="main">
      <center></center>
      <div className="row">
        <center>
          <a href="/">
            <button>Top of Page</button>
          </a>
          <br />
          Please leave a comment -any info/facts or suggestions are welcome.
          <br />
          <br />
          <form
            action="mailto:p_ollie@hotmail.com"
            method="post"
            enctype="text/plain"
            id="commentForm"
          >
            <div id="inputs">
              <label for="email">
                <b>Email:</b>
                <i>Optional</i>
              </label>
              <input type="email" id="email" name="email" />
              <label for="fname">
                <b>First name:</b>
                <i>Optional</i>
              </label>
              <input type="text" id="fname" name="fname" />
              <br />
              <br />
              Comment on existing or new topic?
              <br />
              <div className="radioButtons">
                <div className="row">
                  <input
                    type="radio"
                    id="populationRadio"
                    value="population"
                    name="radio"
                  />
                  <label for="population">Population </label>
                  <input
                    type="radio"
                    id="climateRadio"
                    value="climate"
                    name="radio"
                  />
                  <label for="climate">Climate</label>
                  <input
                    type="radio"
                    id="foodRadio"
                    value="existingTopic"
                    name="food"
                  />
                  <label for="food">food </label>
                  <input
                    type="radio"
                    id="packagingRadio"
                    value="packaging"
                    name="radio"
                  />
                  <label for="packaging">Packaging </label>
                  <input
                    type="radio"
                    id="plasticRadio"
                    value="plastic"
                    name="radio"
                  />
                  <label for="plastic">plastic</label>
                </div>
              </div>
              <div className="radioButtons">
                <input type="radio" id="climat" value="newTopic" name="radio" />
                <label for="newTopic"> New Topic</label>
                <br />
              </div>
              <div className="details">
                <label>Comments:</label>
                <br />
                <textarea
                  name="comment"
                  maxlength="600"
                  form="commentForm"
                ></textarea>
              </div>
              <input type="submit" />
            </div>
          </form>
        </center>
      </div>
    </div>
  </div>
);
