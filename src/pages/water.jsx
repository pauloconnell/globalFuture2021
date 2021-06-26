import * as React from "react";
import { Link } from "wouter";

/*
The Home function defines the content that makes up the main content of the Home page
- This component is attached to the /about path in router.jsx
- The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Water() {
  return (
    <div>
      <center>
        <div className="content">
          <h2>Set the Global Standards:</h2>
          <br />
          <h3>
            What are the most reasonable expectations of protection of our oceans, lakes and rivers.<br/>
            <br/>
            What is the global standard for provision of clean drinking water?
          </h3>
      
        </div>
      </center>
      <br />

      <div className="container">
      

        <center>
          <div className="content"></div>
        </center>
        <div className="details">
          <center>
            <u>Water is essential for life</u>
          </center>
          <br />
          <br />
          <center>
            <h1>Water Management</h1>
          </center>
          <br />
          The oceans are in critical condition and worsening. Fish stock
          depletion by highly technological overfishing has to stop. A 3-year
          period shall allow for adjustment from technological factory fishing
          the oceans, to fish farms developed in large ocean inlets and coves,
          stocked, developed and run by those factory-fishing the open oceans.
          Local land-based fishing shall continue to provide food for the
          locality.
          <br />
          <br />
          <center>
            <h2>Freshwater management</h2>
          </center>
          • For drinking purposes, kits for cleaning water to be developed and
          supplied to third world countries with water cleanliness problems.
          When and where de-salinization becomes efficient, it shall be used
          primarily for drinking water.
          <br />
          <br />• In first world countries, a system shall be developed to
          re-cycle grey water in each domicile and re-use it.
          <br />
          <br />• For irrigation purposes, water usage to be limited by law, so
          that mega-farming shall be reduced and water conserved. Financial
          incentives shall be in place to offset the effect of reduced
          production.
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
