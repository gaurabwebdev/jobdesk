import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "../App";
import { getSavedJobs } from "../Utilities/fakeDb";
import JobCard2 from "./JobCard2";

const Applied = () => {
  const allJobs = useContext(JobContext);

  let [appliedJobArray, setAppliedJobArray] = useState([]);
  useEffect(
    () => {
      const newJobArray = [];
      const jobsFromStorage = getSavedJobs();
      if (jobsFromStorage) {
        for (const jobId in jobsFromStorage) {
          const randomJob = allJobs.find((job) => job.jobId === jobId);
          if (randomJob) {
            newJobArray.push(randomJob);
          }
        }
      }
      setAppliedJobArray(newJobArray);
    },
    allJobs,
    appliedJobArray
  );
  const handleChange = (e) => {
    const userSelection = e.target.value;

    if (appliedJobArray && userSelection !== "Filter By") {
      const newJobArray = appliedJobArray.filter(
        (job) => job.jobType === userSelection
      );
      setAppliedJobArray(newJobArray);
    }
  };
  console.log(appliedJobArray);
  return (
    <div className="my-container">
      <p className="text-4xl font-semibold text-center">Applied Jobs</p>
      <div className="bg-gray-200 p-3 rounded inline">
        <select
          onChange={handleChange}
          className="bg-gray-200"
          name="jobs"
          id="jobSelector"
        >
          <option default>Filter By</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-Site</option>
        </select>
      </div>
      <div>
        <div className="p-3 gap-2 my-5">
          {appliedJobArray
            ? appliedJobArray.map((job) => (
                <JobCard2 key={job.jobId} job={job}></JobCard2>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Applied;
