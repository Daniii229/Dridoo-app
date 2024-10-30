import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";
import "../pages/Jobs.css";
const Jobs = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="Today's Jobs - Total" />
        <JobsTable />
      </div>
    </>
  );
};

export default Jobs;
