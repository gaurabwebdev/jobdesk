import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { JobContext } from "../App";
import { addJobToLS } from "../Utilities/fakeDb";

const SingleJob = () => {
  const allJobs = useLoaderData();
  const { jobId } = useParams();
  const [currentJob, setCurrentJob] = useState([]);
  useEffect(() => {
    if (jobId && allJobs) {
      const foundJob = allJobs.find((job) => job.jobId === jobId);
      setCurrentJob(foundJob);
    }
  }, [allJobs, jobId]);
  console.log(allJobs, jobId, currentJob);
  const {
    companyLogo,
    companyName,
    contactEmail,
    educationalRequirements,
    experiences,
    jobDescription,
    jobResponsibilities,
    jobTitle,
    jobType,
    jobType2,
    location,
    phone,
    salary,
  } = currentJob;
  const handleAddToLs = (id) => {
    addJobToLS(id);
  };
  return (
    <div>
      <p className="text-4xl font-semibold text-center">Job Details</p>
      <div className="my-container text-xl flex flex-col md:flex-row gap-2">
        <div className="p-4">
          <p className="mb-5">
            <span className="font-bold">Job Description: </span>
            {jobDescription}
          </p>
          <p className="mb-5">
            <span className="font-bold">Job Responsibility: </span>
            {jobResponsibilities}
          </p>
          <p className="mb-5">
            <span className="font-bold">Educational Requirements: </span>
            {educationalRequirements}
          </p>
          <p>
            <span className="font-bold">Experiences: </span>
            {experiences}
          </p>
        </div>
        <div className=" p-2 flex flex-col">
          <div className="bg-blue-100 p-3 rounded mb-3 w-full md:w-80">
            <div className="flex flex-col gap-4 mb-3">
              <span className="font-bold"> Job Details </span>
              <p className="flex items-center gap-2">
                <CalendarDaysIcon className="w-6 h-6 text-purple-400" />
                Job Title:
                <span>{jobTitle}</span>
              </p>
              <p className="flex items-center gap-2">
                <CurrencyDollarIcon className="w-6 h-6 text-purple-400" />
                Salary:
                <span>{salary}</span>
              </p>
            </div>
            <div className="flex flex-col gap-4 mb-3">
              <span className="font-bold"> Contact Information </span>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                Phone:
                <span>{phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                Email:
                <span>{contactEmail}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapIcon className="w-6 h-6 text-purple-400" />
                Location:
                <span>{location}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => handleAddToLs(jobId)}
            className="bg-gradient-to-l from-purple-400 to-cyan-400 py-2 px-3 rounded text-xl text-white font-semibold"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
