import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ tiltle }) => {
  return (
    <nav
      style={{ position: "sticky", top: "0", zIndex: "100" }}
      className="xl:pl-5 navbar mb-12 shadow-lg bg-neutral text-neutral-content "
    >
      <div className="container mx-auto">
        <div className="flex-none px2-mx-2">
          <NavLink to="/" className="text-lg font-bold align-middle">
            <FaGithub className="inline pr-2 text-3xl" />
            {tiltle}
          </NavLink>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <NavLink to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </NavLink>
            <NavLink to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  tiltle: "Github Finder",
};
Navbar.prototype = {
  tiltle: PropTypes.string,
};

export default Navbar;
