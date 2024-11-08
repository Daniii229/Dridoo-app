import React from "react";
import JobsHead from "../component/JobsHead";
import JobsTable from "../component/JobsTable";
import "../pages/Jobs.css";
const CustomerCompany = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="Companies/Customers" />
        <JobsTable />
      </div>
    </>
  );
};

export default CustomerCompany;
