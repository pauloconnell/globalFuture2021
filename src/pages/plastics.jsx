import * as React from "react";
import { Link } from "wouter";

/*
The Home function defines the content that makes up the main content of the Home page
- This component is attached to the /about path in router.jsx
- The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Plastics() {
  return (
    <div>
      <center>
        <div className="content">
          <h2>Set the Global Standards for plastic use and recycling</h2>
          <br />
          <h3>
            What are the most reasonable steps we must take to ensure plastic recycling works?
          </h3>
          <br />
        </div>
      </center>
      <br />
      <br />

      <div className="container">
        <center>
          <div className="content"></div>
        </center>

        <div className="details">
          <center>
            <u>Plastic is one of the leading pollution problems</u>
          </center>
          <br />
          <br />
          <center>
            <h1>Plastics</h1>
          </center>
          <br />• Production shall be phased out, except for industrially vital
          applications where no feasible alternative exists. People who would be
          displaced by elimination of plastic shall be employed in setting up
          and producing the alternatives, or compensated until they find other
          employment.
          <br />
          <br />
          <center>
            <a href="/">
              <button>Main Page</button>
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}
