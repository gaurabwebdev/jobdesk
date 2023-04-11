import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-16 py-8 flex justify-between items-center">
      <Link to={"/"}>
        <span className="text-3xl font-medium">jobDesk</span>
      </Link>
      <nav className="text-xl">
        <NavLink
          className={`mx-2 ${({ isActive }) =>
            isActive ? "active" : "text-gray-600"}`}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={`mx-2 ${({ isActive }) =>
            isActive ? "active" : "text-gray-600"}`}
          to={"/statistics"}
        >
          Statistics
        </NavLink>
        <NavLink
          className={`mx-2 ${({ isActive }) =>
            isActive ? "active" : "text-gray-600"}`}
          to={"/applied"}
        >
          Applied
        </NavLink>
        <NavLink
          className={`mx-2 ${({ isActive }) =>
            isActive ? "active" : "text-gray-600"}`}
          to={"/blog"}
        >
          Blog
        </NavLink>
      </nav>

      <button className="my-btn">
        <Link to={"/jobs"}>Start Applying</Link>
      </button>
    </header>
  );
};

export default Header;
