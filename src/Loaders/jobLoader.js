export const loadedJobs = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-gaurabwebdev/main/public/allJobs.json?token=GHSAT0AAAAAAB66KS3S4JJ63UKTVRYCH4Y2ZBVMDQQ"
  );
  const jobs = await res.json();

  return jobs.jobs;
};
