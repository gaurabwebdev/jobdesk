import React from "react";
import Category from "./Category";

const CategoryJobs = ({ categories }) => {
  return (
    <div className="my-container">
      <h2 className="text-4xl font-semibold text-center">Job Category List</h2>
      <p className="text-xl text-gray-500 tracking-wide leading-snug text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="px-10 py-4 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <Category category={category} key={index}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryJobs;
