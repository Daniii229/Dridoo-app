import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";
import "../pages/Jobs.css";
const Pricing = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="Drivers" />
        <JobsTable />
      </div>
    </>
  );
};

export default Pricing;
