import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "../App";
import { getSavedJobs } from "../Utilities/fakeDb";
import JobCard2 from "./JobCard2";

const Applied = () => {
  const allJobs = useContext(JobContext);
  const [appliedJobArrayFirst, setAppliedJobArrayFirst] = useState([]);
  const [appliedJobArraySecond, setAppliedJobArraySecond] = useState([]);
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
      setAppliedJobArrayFirst(newJobArray);
      setAppliedJobArraySecond(newJobArray);
    },
    allJobs,
    appliedJobArraySecond
  );
  const handleChange = (e) => {
    const userSelection = e.target.value;

    if (setAppliedJobArrayFirst && userSelection !== "Filter By") {
      const newJobArray = appliedJobArrayFirst.filter(
        (job) => job.jobType === userSelection
      );
      setAppliedJobArraySecond(newJobArray);
    }
  };
  console.log(appliedJobArraySecond);
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
          {appliedJobArraySecond
            ? appliedJobArraySecond.map((job) => (
                <JobCard2 key={job.jobId} job={job}></JobCard2>
              ))
            : ""}
        </div>
      </div>

      {appliedJobArrayFirst.length === 0 ? <p>You haven't applied yet</p> : ""}
    </div>
  );
};

export default Applied;
