import { loadedJobs } from "./jobLoader";

export const jobDetails = (id) => {
  const availableJobs = loadedJobs();
  console.log(availableJobs);
  const currentJob = availableJobs.find((job) => job.jobId === id);
  return currentJob;
};
