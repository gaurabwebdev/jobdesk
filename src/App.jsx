import { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Components/Footer";
export const JobContext = createContext([]);
export const FeaturedJobContext = createContext([]);
function App() {
  const allJobs = useLoaderData();
  const [featuredJobs, setFeaturedJobs] = useState(allJobs.slice(0, 4));

  return (
    <JobContext.Provider value={allJobs}>
      <FeaturedJobContext.Provider value={[featuredJobs, setFeaturedJobs]}>
        <Header />
        <Outlet />
        <Footer />
      </FeaturedJobContext.Provider>
    </JobContext.Provider>
  );
}

export default App;
