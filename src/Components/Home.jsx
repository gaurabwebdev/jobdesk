import React from "react";
import Heroarea from "./Sections/Heroarea";
import FetauredJobs from "./Sections/FetauredJobs";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedCategories = useLoaderData().categories;
  const categories = loadedCategories.categories;
  return (
    <div>
      <Heroarea></Heroarea>
      <FetauredJobs categories={categories}></FetauredJobs>
    </div>
  );
};

export default Home;
