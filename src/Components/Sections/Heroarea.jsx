import React from "react";

const Heroarea = () => {
  return (
    <div className="my-container flex flex-col lg:flex-row justify-center items-center gap-5">
      <div className="flex flex-col gap-5 w-full lg:w-50">
        <h1 className="text-5xl font-semibold tracking-wide leading-snug">
          One Step Closer To Your
          <br></br>
          <span className="active">Dream Job</span>
        </h1>
        <p className="text-xl text-gray-500 tracking-wide leading-snug">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="my-btn">Get Started</button>
      </div>
      <div>
        <img
          className="w-full lg:w-50"
          src="https://i.ibb.co/GRv4BHz/P3-OLGJ1-copy-1.png"
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default Heroarea;
