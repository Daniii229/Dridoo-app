import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import Checkbutton from "../component/Checkbutton";
import Input from "../component/Input";
import "../pages/CreateJob.css";
const CreateJob = () => {
  return (
    <>
      <div className="Createjob-content">
        <div className="Car-information">
          <h2>Create a New Job</h2>
          <h3>Car Information</h3>
          <table>
            <tr>
              <td>
                <Input label="Plate Number" placeholder="lorem ispum" />
              </td>
              <td>
                <Input label="Car Model (Option)" placeholder="lorem ispum" />
              </td>
            </tr>
            <tr>
              <td>
                <Input label="Car brand" placeholder="lorem ispum" />
              </td>
              <td>
                <Input label="Car Color" placeholder="lorem ispum" />
              </td>
            </tr>
          </table>
          <button className="Confirmbtn">Confirm vehicle</button>
        </div>

        <div className="Person-in-collection">
          <h3>Person In Collection</h3>
          <table>
            <tr>
              <td>
                <Input label="Full Name" placeholder="lorem ispum" />
              </td>
              <td>
                <Input label="Email Address" placeholder="lorem ispum" />
              </td>
            </tr>
            <tr>
              <td>
                <Input label="Phone Number" placeholder="lorem ispum" />
              </td>
              <td>
                <Input label="Collection Address" placeholder="lorem ispum" />
              </td>
            </tr>
            <tr>
              <td>
                <Input label="House Number" placeholder="lorem ispum" />
              </td>
              <td>
                <Input label="Pick up Date" placeholder="lorem ispum" />
              </td>
            </tr>
          </table>
        </div>
        <div className="Person-in-collection">
          <h3>Person In Delivery</h3>
          <div style={{ display: "flex", gap: "5px" }}>
            <Checkbutton />
            <p>Same Details as person in Collection</p>
          </div>

          <table>
            <tr>
              <td>
                <Input label="Full Name" placeholder="lorem ispum" />
              </td>
              <td>
                <Input label="Email Address" placeholder="lorem ispum" />
              </td>
            </tr>
            <tr>
              <td>
                <Input label="Phone Number" placeholder="lorem ispum" />
              </td>
              <td>
                <Input label="Collection Address" placeholder="lorem ispum" />
              </td>
            </tr>
            <tr>
              <td>
                <Input label="House Number" placeholder="lorem ispum" />
              </td>
              <td>
                <Input label="Pick up Date" placeholder="lorem ispum" />
              </td>
            </tr>
          </table>
        </div>
        <Input label="Notes" />
        <div style={{ display: "flex", gap: "10px" }}>
          <p>Include Services</p>
          <Checkbutton />
          <p>Car Wash</p>
          <Checkbutton />
          <p>Refueling</p>
        </div>
        <div style={{ display: "flex", gap: "20px", height: "40px" }}>
          <h2 style={{ paddingTop: "5px" }}>Total Price</h2>{" "}
          <Input placeholder="$" />
        </div>
        <div style={{ display: "flex", width: "100%", gap: "20px" }}>
          <div style={{ width: "50%" }}>
            {" "}
            <Link to="/Dashboard">
              {" "}
              <Button title="Back" backgroundColor="#D4DFE7" color="black" />
            </Link>
          </div>
          <div style={{ width: "50%" }}>
            <Link to="/Jobs">
              {" "}
              <Button title="Book Now" backgroundColor="#27374D" />{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
