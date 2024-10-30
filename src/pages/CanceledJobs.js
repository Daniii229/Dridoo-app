import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";

const CanceledJobs = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="Cancelled Jobs - Total" />
        <JobsTable />
      </div>
    </>
  );
};

export default CanceledJobs;
