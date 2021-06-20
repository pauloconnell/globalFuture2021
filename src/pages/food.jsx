import * as React from "react";
import { Link } from "wouter";

/*
The Home function defines the content that makes up the main content of the Home page
- This component is attached to the /about path in router.jsx
- The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Food() {
  return (
    <html>
      <head>
        <title>Global Future: World Peace</title>
        <link
          rel="shortcut icon"
          href="https://cdn.hyperdev.com/us-east-1%3A52a203ff-088b-420f-81be-45bf559d01b1%2Ffavicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link href="style.css" rel="stylesheet" type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>
        <center>
          <div id="content">
            <h2>Global 'Government' set the Global Standards:</h2>
            <br />
            <h3>Food should not be toxic, and should be available to all.</h3>
            <br />
          </div>
        </center>
        <br />
        <br />
        <div id="details">
          <center>
            <u>Nobody should die from hunger</u>
          </center>
          <br />
          <br />
          <center>
            <h1>Food Management</h1>
            <h2>Food for the planet</h2>
            <br />
          </center>
          • The food requirement for a population of 9 billion (initially, with
          a much lower end objective calculated), shall be worked out using
          local food crops wherever possible, augmented by scientifically
          developed crops and meats.
          <br />
          • Excessive consumption of imported (non-local) food and goods in the
          first world has to stop; achieved by taxation and limits on allowable
          amounts of imported food.
          <br />
          • Individuals need to lessen dependence on purchased fruits and
          vegetables and return to growing their own on whatever patch of land
          they can use; or purchasing at local Farmers’ markets.
          <br />
          • Meat production through farmed species is inefficient, converting
          vegetable matter to food through animals. Alternative means are needed
          via scientific development of replacement ‘meats’.
          <br />
          • Food distribution requires transport all over the world, and needs
          to be reduced; the emphasis must be on locally produced, and all forms
          of transport (airplanes, trucks, trains and cars) operated on energy
          derived from renewable energy sources.
          <br />
          <br />
          <center>
            <a href="/">
              <button>Main Page</button>
            </a>
          </center>
          <br />
        </div>
      </body>
    </html>
  );
}
