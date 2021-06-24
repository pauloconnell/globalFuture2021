import * as React from "react";
import { Link } from "wouter";

/*
The Home function defines the content that makes up the main content of the Home page
- This component is attached to the /about path in router.jsx
- The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Climate() {
  return (
    <div>
      <center>
        <div className="content">
          <h2>Set the Global Standards:</h2>
          <br />
          <h3>What are the most reasonable steps we must take to avoid carbon pollution?</h3>
          <br />
        </div>
      </center>
      <br />
      <br />

      <div class="container">
        <center>
          <div id="content"></div>
        </center>
       
        <div id="details">
          <center>
            <u>We can save the world</u>
          </center>
          <br />
          <br />
          <center>
            <h1>Climate Management</h1>
            <h2>Fossil Fuel Dependence</h2>To wean our world off fossil fuels
            without massive disruption, the World Government shall financially
            support the Energy Plan:
            <br />
            <h3>Energy Plan</h3>Large-scale development of alternative energy
            sources i.e. wind, solar and geothermal primarily, to displace
            fossil fuel, shall be essential. This shall impact many people whose
            livelihood is dependent on large industrial operations producing or
            using large volumes of fossil fuels. To minimize the impact on these
            people, they shall be employed in construction and installation of
            the alternate energy sources on nearby land, or compensated until
            they find other employment This initiative shall boost the economy
            as it replaces refineries and exploration with production of wind
            turbines and solar and geothermal equipment, among other sources.
            <br />
            <br />
            <h3>Paying for the Energy Plan</h3>The world government shall
            contribute to the capital cost of the plan, to augment the spending
            that shall be required of the affected industries. There shall be no
            option for the affected industries; either they participate in
            planning the transition from fossil fuels, or pay extreme taxes for
            continuing to pollute with hot house gases.
            <br />
          </center>
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
