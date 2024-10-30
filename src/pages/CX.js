import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";
import "../pages/Jobs.css";
const CX = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="CX" />
        <JobsTable />
      </div>
    </>
  );
};

export default CX;
