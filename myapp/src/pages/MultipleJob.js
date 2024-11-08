import React from "react";
import Button from "../component/Button";
import "../pages/Jobs.css";
import "../pages/MultipleJob.css";

const MultipleJob = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <h1>Create Multiple Jobs</h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <p>
            Please download this excel file and check its format, excel files
            <br></br> uploaded with other format is not applicable.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ width: "200px" }}>
              <Button backgroundColor="#27374D" title="Download CSV" />
            </div>
            <div style={{ width: "200px" }}>
              <Button backgroundColor="#27374D" title="Upload CSV" />
            </div>
          </div>
        </div>
        <div className="Multiplejobtable">
          <table>
            <thead>
              <tr>
                <th>Job Id</th>
                <th>Number Plate</th>
                <th>Destination Address</th>
                <th>Departure Address</th>
                <th>Time</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1231231</td>
                <td>ko16ygp</td>
                <td>12-03-23</td>
                <td>12-03-23</td>
                <td>4:00</td>
                <td>1200$</td>
              </tr>
              <tr>
                <td>1231231</td>
                <td>ko16ygp</td>
                <td>12-03-23</td>
                <td>12-03-23</td>
                <td>4:00</td>
                <td>1200$</td>
              </tr>{" "}
              <tr>
                <td>1231231</td>
                <td>ko16ygp</td>
                <td>12-03-23</td>
                <td>12-03-23</td>
                <td>4:00</td>
                <td>1200$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MultipleJob;
