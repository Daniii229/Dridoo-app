import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";

const CompletedJobs = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="Completed Jobs - Total" />
        <JobsTable />
      </div>
    </>
  );
};

export default CompletedJobs;
