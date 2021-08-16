import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "220px",
  height: "50px",
  padding: "25px",
  margin: "0px -30px 15px 55px",
  background: "#1B6AA5",
  textDecoration: "none",
  color: "white",
  "border-radius": "0.4rem",
  "text-align": "center",
  display: "inline-block",
  "line-height": "-0px",
};



function Navbar() {
  return (
    <div>
      <NavLink
        to="/OrderPizzaTab"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Buy Your Pizza!
      </NavLink>

      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Testimonials
      </NavLink>
    </div>
  );
}

export default Navbar;
