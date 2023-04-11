import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleJob = () => {
  const currentId = useLoaderData();
  console.log(currentId);
  return (
    <div>
      <p>Single Job</p>
    </div>
  );
};

export default SingleJob;
