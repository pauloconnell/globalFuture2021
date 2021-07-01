import * as React from "react";
import { Link } from "wouter";
//import { image } from  "https://res-console.cloudinary.com/pollie/thumbnails/transform/v1/image/upload/Y19zY2FsZSx3XzEwOTE=/v1606855539/cGFja2FnaW5nX3N1cDZkYw==/template_primary";

/*
The Home function defines the content that makes up the main content of the Home page
- This component is attached to the /about path in router.jsx
- The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Packaging() {
  return (
    <div>
      <center>
        <div className="content">
          <h2>Global Standard:</h2>

          <h3>
            Limit emmissions by reducing consumption based on personal limits and/or carbon taxxes.  
          </h3>
          <br />
        </div>
      </center>

      <div className="container">
        <br />
        <br />

        <center>
          <div className="content"></div>
        </center>
        <br />
        <br />
        <br />
        <div className="details">
          <center>
            <u>Transportation is a leading cause of air polution:</u>
          </center>
          <br />
          <br />
          <center>
            <h1>Transportation/Travel</h1>
          </center>
          <br />• The ownership of fossil fuel vehicles has to be reduced, and
          the way forward seems to be bright in this regard, with a combination
          of electric autonomous cars called up by an Uber / Lyft application,
          once that technology is fully developed.
          <br />• Use of cars on highways can be reduced by imposing fees for use
          of highways.
          <br />• Use of cars in cities to be changed; mass transport in cities
          to be by rail and bus; cities to increase non-driving portions of
          cities, and restrict vehicle access other than necessary for commerce.
          <br />• Airplane and cruise-ship transport has grown beyond reason.
          Limits on travel to be imposed – 2 personal round trip flights per
          year, and 4 round trip business travel flights per year; and 1 cruise
          ship trip every 2 years.
          <br />
          <br />
          <center>
            <a href="/">
              <button>Main Page</button>
            </a>
          </center>
        </div>
      </div>

      <br />
    </div>
  );
}
