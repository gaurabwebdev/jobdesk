import React from "react";
import Heroarea from "./Sections/Heroarea";
import CategoryJobs from "./Sections/CategoryJobs";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  const loadedCategories = useLoaderData().categories;
  const categories = loadedCategories.categories;
  return (
    <div>
      <Heroarea></Heroarea>
      <CategoryJobs categories={categories}></CategoryJobs>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
