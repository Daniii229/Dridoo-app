import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";
import "../pages/Jobs.css";
const Users = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="Users" />
        <JobsTable />
      </div>
    </>
  );
};

export default Users;
