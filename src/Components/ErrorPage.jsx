import { HandRaisedIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <HandRaisedIcon className="w-40 h-40 text-purple-500" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-purple-500">
            <span className="sr-only">Error</span>
            {"STOP" || status}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
            Invalid Access
          </p>
          <Link to="/" className="my-btn">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
