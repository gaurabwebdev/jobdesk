import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const JobCard = ({ fjob }) => {
  const {
    jobTitle,
    companyLogo,
    companyName,
    jobId,
    jobType,
    jobType2,
    location,
    salary,
  } = fjob;
  return (
    <div className="py-5 px-4 border rounded flex flex-col items-center lg:items-start">
      <img className="w-44 mb-5" src={companyLogo} alt="company-logo" />
      <p className="text-2xl font-medium text-gray-700">{jobTitle}</p>
      <p className="text-lg font-medium text-gray-500">{companyName}</p>
      <div className="flex gap-4 my-5 items-center">
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
      <Link to={`/jobs/${jobId}`}>
        <button className="my-btn">View Details</button>
      </Link>
    </div>
  );
};

export default JobCard;
