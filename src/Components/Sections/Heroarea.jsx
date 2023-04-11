import React from "react";

const Heroarea = () => {
  return (
    <div className="my-container flex justify-center items-center gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-semibold">
          One Step Closer To Your
          <br></br>
          <span className="active">Dream Job</span>
        </h1>
        <p className="text-xl text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="my-btn">Get Started</button>
      </div>
      <div>
        <img src="https://ibb.co/PgZv3Dq" alt="hero-image" />
      </div>
    </div>
  );
};

export default Heroarea;
