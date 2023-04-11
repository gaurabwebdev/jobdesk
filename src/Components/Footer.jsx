import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-900 text-gray-200 gap-3">
      <div className="text-center">
        <Link to={"/"}>
          <span className="text-3xl font-medium">jobDesk</span>
        </Link>
        <p className="text-xl text-gray-500 tracking-wide leading-snug my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <img
          className="mx-auto"
          src="https://i.ibb.co/fCmN0PX/Group-9969.png"
          alt="social-icons"
        />
      </div>
      <div className="text-center">
        <span className="text-3xl font-light">Company</span>
        <ul className="my-4 flex flex-col gap-3 ">
          <li>About Us</li>
          <li>Work</li>
          <li>Latest News</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="text-center">
        <span className="text-3xl font-light">Product</span>
        <ul className="my-4 flex flex-col gap-3 ">
          <li>Prototype </li>
          <li>Plans & Pricing </li>
          <li>Customers </li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className="text-center">
        <span className="text-3xl font-light">Support</span>
        <ul className="my-4 flex flex-col gap-3 ">
          <li>Help Desk </li>
          <li>Sales </li>
          <li>Become a Partner </li>
          <li>Developers</li>
        </ul>
      </div>
      <div className="text-center">
        <span className="text-3xl font-light">Contact</span>
        <ul className="my-4 flex flex-col gap-3 ">
          <li>524 Broadway , NYC</li>
          <li> +1 777 - 978 - 5570</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
