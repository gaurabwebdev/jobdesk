import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="px-16 py-8 flex justify-between items-center relative">
      <Link to={"/"}>
        <span className="text-3xl font-medium">jobDesk</span>
      </Link>
      <nav className="text-xl hidden lg:flex">
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

      {menuOpen && (
        <>
          <nav className="bg-purple-100 absolute z-10 inset-x-0 top-0  w-full h-72 rounded-b-md flex justify-between items-start">
            <Link className="mt-8 ml-16" to={"/"}>
              <span className="text-3xl font-medium">jobDesk</span>
            </Link>
            <ul className="text-end mt-16 text-xl flex-1">
              <li className="mb-3">
                <NavLink
                  className={`mx-2 ${({ isActive }) =>
                    isActive ? "active" : "text-gray-600"}`}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink
                  className={`mx-2 ${({ isActive }) =>
                    isActive ? "active" : "text-gray-600"}`}
                  to={"/statistics"}
                >
                  Statistics
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink
                  className={`mx-2 ${({ isActive }) =>
                    isActive ? "active" : "text-gray-600"}`}
                  to={"/applied"}
                >
                  Applied
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink
                  className={`mx-2 ${({ isActive }) =>
                    isActive ? "active" : "text-gray-600"}`}
                  to={"/blog"}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden border border-gray-300 p-2 rounded-md mt-6 mr-6"
            >
              <XCircleIcon className="w-6 h-6 text-purple-500" />
            </button>
          </nav>
        </>
      )}

      <button className="my-btn hidden lg:inline">
        <Link to={"/jobs"}>Start Applying</Link>
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden border p-2 rounded-md absolute top-6 right-6"
      >
        <Bars3Icon className="w-6 h-6 text-purple-500" />
      </button>
    </header>
  );
};

export default Header;
