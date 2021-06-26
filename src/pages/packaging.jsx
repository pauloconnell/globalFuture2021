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

          <h3>Limit 'over packaging' by identifying ideal packaging for types of products.</h3>
          <br />
        </div>
      </center>

      <div className="container">
        <br />
        <br />
        <div className="details">
          <center>
            <u>Too many companies are wasting resources 'over packaging'</u>
          </center>
          <br />
          <br />
          <center>
            <h1>Packaging</h1>
          </center>
          <br />• Large amounts of energy is required to produce packaging –
          cardboard and plastic – yet cardboard and plastic packaging has become
          excessive and wasteful; often the material in the packaging far
          exceeds the material in the contents.
          <br />• Packaging of Supermarket foods needs to be radically reduced
          or eliminated. The food industries must convert to compostable
          alternatives, and less of them.
          <br />
          <br />A good example of sustainable packaging is:
          <center>
            <h2>Google Nest Hub</h2>
            -packaging is made almost completely of compostable cardboard
            (exeption being the plastic screen cover).
            <img
              id="googleBox"
              src="https://res-console.cloudinary.com/pollie/thumbnails/transform/v1/image/upload/Y19zY2FsZSx3XzEwOTE=/v1606855539/cGFja2FnaW5nX3N1cDZkYw==/template_primary"
              alt="Photo of packaging"
            />
            <br />
            <br />
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
