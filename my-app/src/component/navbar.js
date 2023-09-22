import React from "react";

import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Educademy LLP
      </Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
