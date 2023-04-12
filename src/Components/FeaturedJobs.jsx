import React, { useContext } from "react";
import { FeaturedJobContext, JobContext } from "../App";
import JobCard from "./JobCard";
import { useState } from "react";

const FeaturedJobs = () => {
  const allJobs = useContext(JobContext);
  const [featuredJobs, setFeaturedJobs] = useContext(FeaturedJobContext);
  const showAll = () => {
    setFeaturedJobs(allJobs);
  };
  return (
    <>
      <div className="my-container">
        <h2 className="text-4xl font-semibold text-center">Featured Jobs</h2>
        <p className="text-xl text-gray-500 tracking-wide leading-snug text-center mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-2 my-5">
          {featuredJobs.map((job) => (
            <JobCard status={true} key={job.jobId} job={job}></JobCard>
          ))}
        </div>
      </div>
      {featuredJobs.length <= 4 ? (
        <div className="my-continer flex justify-center mb-5">
          <button onClick={showAll} className="my-btn">
            See All Jobs
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FeaturedJobs;
