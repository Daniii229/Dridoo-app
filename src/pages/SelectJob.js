import React from "react";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../pages/SelectJob.css";

const SelectJob = () => {
  return (
    <>
      <div className="SelectJob">
        <div style={{ textAlign: "center" }}>
          <h1>Choose Job</h1>
          <p> Please Select one to create a new job</p>
          <div className="SelectJobCard">
            <Link to="/dashboard/CreateJob">
              <div className="single">
                <h3>Single</h3>
                <FaCarSide fontSize={40} color="#27374D" />
              </div>
            </Link>
            <Link to="/dashboard/MultipleJob">
              <div className="multiple">
                <h3>Multiple</h3>
                <div style={{ display: "flex" }}>
                  {" "}
                  <FaCarSide fontSize={40} color="#27374D" />
                  <FaCarSide fontSize={40} color="#27374D" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectJob;
