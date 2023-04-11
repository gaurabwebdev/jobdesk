export const loadedJobs = async () => {
  const res = await fetch("allJobs.json");
  const jobs = await res.json();

  return jobs.jobs;
};
