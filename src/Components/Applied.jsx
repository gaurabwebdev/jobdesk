import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "../App";
import { getSavedJobs } from "../Utilities/fakeDb";

const Applied = () => {
  const allJobs = useContext(JobContext);

  let [appliedJobArray, setAppliedJobArray] = useState([]);
  useEffect(() => {
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
  }, allJobs);
  console.log(appliedJobArray);
  return (
    <div>
      <p>Applied</p>
    </div>
  );
};

export default Applied;
