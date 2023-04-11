import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import Applied from "./Components/Applied";
import Blog from "./Components/Blog";
import Jobs from "./Components/FeaturedJobs";
import { loadedCategories } from "./Loaders/categories";
import { loadedJobs } from "./Loaders/jobLoader";
import SingleJob from "./Components/SingleJob";
import { jobDetails } from "./Loaders/singlejobLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loadedJobs,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loadedCategories,
      },
      {
        path: "/jobs/:jobId",
        element: <SingleJob />,
        loader: loadedJobs,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied",
        element: <Applied />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
