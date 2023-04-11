// add job data to local storage
const addJobToLS = (id) => {
  let appliedJobs = {};
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
    if (id in appliedJobs) {
      return;
    } else {
      appliedJobs[id] = 1;
    }
  } else {
    appliedJobs[id] = 1;
  }

  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  console.log(id);
};

export { addJobToLS };
