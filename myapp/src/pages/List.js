import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";
import "../pages/Jobs.css";
const List = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="List" />
        <JobsTable />
      </div>
    </>
  );
};

export default List;
