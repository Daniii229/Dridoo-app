import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";
import "../pages/Jobs.css";
const FutureJobs = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="Future's Jobs - Total" />
        <JobsTable />
      </div>
    </>
  );
};

export default FutureJobs;
