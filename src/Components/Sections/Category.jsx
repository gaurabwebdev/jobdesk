import React from "react";

const Category = ({ category }) => {
  const { categoryTitle, categoryLogo, availableJobs } = category;
  return (
    <div className="p-4 bg-purple-300">
      <img src={categoryLogo} alt="category-logo" />
      <h3>{categoryTitle}</h3>
      <p>{availableJobs}</p>
    </div>
  );
};

export default Category;
