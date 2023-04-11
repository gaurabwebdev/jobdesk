import React from "react";

const Category = ({ category }) => {
  const { categoryTitle, categoryLogo, availableJobs } = category;
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <img
        className="p-2 bg-purple-200 rounded"
        src={categoryLogo}
        alt="category-logo"
      />
      <h3 className="text-xl font-medium text-gray-700 my-2">
        {categoryTitle}
      </h3>
      <p className="text-lg font-semibold text-gray-500">
        {availableJobs === 100 ? availableJobs + "+" : availableJobs} Jobs
        Available
      </p>
    </div>
  );
};

export default Category;
