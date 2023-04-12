import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const JobCard2 = ({ job }) => {
  const {
    jobTitle,
    companyLogo,
    companyName,
    jobId,
    jobType,
    jobType2,
    location,
    salary,
  } = job;
  return (
    <div className="py-5 px-4 border rounded flex flex-col md:flex-row justify-between items-center lg:items-center mb-5">
      <img className="w-44 mb-5" src={companyLogo} alt="company-logo" />

      <div className="flex flex-col gap-4 my-5 items-start">
        <div className="flex gap-4 my-5 text-gray-500 font-semibold items-center">
          <p className="text-2xl font-medium text-gray-700">{jobTitle}</p>
          <p className="text-lg font-medium text-gray-500">{companyName}</p>
        </div>
        <div className="flex gap-4 my-5 text-gray-500 font-semibold items-center">
          <span className="type-btn">{jobType}</span>
          <span className="type-btn">{jobType2}</span>
        </div>

        <div className="flex gap-4 my-5 text-gray-500 font-semibold items-center">
          <span className="flex gap-2 items-center">
            <MapPinIcon className="w-6 h-6" /> {location}
          </span>
          <span className="flex gap-2 items-center">
            <CurrencyDollarIcon className="w-6 h-6" />
            {salary}
          </span>
        </div>
      </div>
      <Link to={`/jobs/${jobId}`}>
        <button className="my-btn">View Details</button>
      </Link>
    </div>
  );
};

export default JobCard2;
