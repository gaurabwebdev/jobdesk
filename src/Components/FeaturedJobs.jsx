import React, { useContext } from "react";
import { FeaturedJobContext, JobContext } from "../App";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const allJobs = useContext(JobContext);
  const [featuredJobs, setFeaturedJobs] = useContext(FeaturedJobContext);
  return (
    <div className="my-container">
      <h2 className="text-4xl font-semibold text-center">Featured Jobs</h2>
      <p className="text-xl text-gray-500 tracking-wide leading-snug text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-2 my-5">
        {featuredJobs.map((fjob) => (
          <JobCard key={fjob.jobId} fjob={fjob}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
