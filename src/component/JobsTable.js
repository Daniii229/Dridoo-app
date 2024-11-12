import React, { useEffect, useState } from "react";
import axios from "axios";
import "../component/JobsTable.css";

const JobsTable = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch jobs from the backend API
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs");
        setJobs(response.data); // Store the jobs in state
      } catch (err) {
        setError("Error fetching jobs");
        console.error(err);
      }
    };

    fetchJobs(); // Call the function to fetch jobs
  }, []); 

  return (
    <div className="jobstable">
      <table>
        <thead>
          <tr>
            <th>Job Id</th>
            <th>Number Plate</th>
            <th>Collection Date & Time</th>
            <th>Delivery Date & Time</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <tr key={job._id}>
                <td>{job._id}</td>
                <td>{job.numberPlate}</td>
                <td>{job.collectionDate}</td>
                <td>{job.deliveryDate}</td>
                <td>{job.price}</td>
                <td>
                  <button
                    style={{
                      padding: "8px 16px",
                      backgroundColor: job.status === "Active" ? "green" : "gray",
                      border: "none",
                      color: "white",
                      borderRadius: "14px",
                    }}
                  >
                    {job.status}
                  </button>
                </td>
                <td>{job.action}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No jobs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobsTable;
