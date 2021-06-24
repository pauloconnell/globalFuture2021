import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

/*
The Home function defines the content that makes up the main content of the Home page
- This component is attached to the /about path in router.jsx
- The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  return (
    <div>
      <center>
        <div className="content">
          <h2>Global 'Government' set the Global Standards:</h2>
          <br />
          <h3>The world government’s mission should be:</h3>
          <br />
          To foster a world where all people can afford a contented lifestyle
          without fear of war and destruction, cruelty or enslavement
          <br />
          and with sufficient food, clean water, and energy;
          <br />
          and freedom within the Law of the country you are in.
        </div>
      </center>
      <br />
      <br />
      <br />
      <div className="details">
        <center>
          <u> How does it work:</u>
        </center>
        <br />
        <br />
        <br />• Essentially like the UN but expanded to invite all countries and
        every person in the world to become a citizen of this 'Global Country'.
        Like the UN, the richest countries, or those with largest militaries,
        shall bear the bulk of the cost of the population management plan
        (below).
        <br />
        <br />• All contributing countries shall have a role in the updating and
        governance of the world's Global Standards. <br />
        <br />• The world government shall establish a military to respond to
        violence or threatened war, made up of people from all of the
        participating countries. Arms dealers to be restricted to selling to the
        government only, and not to non-contributory countries.
        <br />
        <br />• The world government shall collectively work to prevent rogue
        countries from interfering in the peace of the world.
        <br />
        <br />• The populations of countries that do not participate shall not
        benefit from the population management plan below. <br />
        <br />• The leaders of the most powerful nations, US, Russia and China
        shall sign up first, to ensure the plan will be viable. As Prime
        Nations, they shall set up a Council of 20 representatives from Next
        Tier Nations, and a 20 Representatives from Rest - of - the -World
        nations. Of these representatives, a target shall be set to achieve 50%
        female representatives. Proposals from all tiers shall be debated and
        agreed by the Council of Next Tier Nations, and presented to the Prime
        Nations for action.
        <br />
        <br />• The government shall lay out a master plan, and each year
        measure progress against the plan. The master plan shall cover the
        primary problems in the world.
        <br />
        <br />
        <center>
          <br />
          Please leave a comment -any info/facts or suggestions are welcome.
          <br />
          <br />
        </center>
      </div>
    </div>
  );
}
