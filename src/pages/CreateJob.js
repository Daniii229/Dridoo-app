import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios for making HTTP requests

// Import your components here (Button, Checkbutton, etc.)
import Button from "../component/Button";
import Checkbutton from "../component/Checkbutton";
import DropdownInput from "../component/DropdownInput";
import Input from "../component/Input";
import "../pages/CreateJob.css";
import ReactDatePicker from "../component/ReactDatePicker";

const CreateJob = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const navigate = useNavigate();

  // Define all states as needed
  const [plateNumber, setPlateNumber] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carColor, setCarColor] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [notes, setNotes] = useState('');

  // Delivery person details
  const [isSameAsCollection, setIsSameAsCollection] = useState(false);
  const [deliveryFullName, setDeliveryFullName] = useState('');
  const [deliveryEmailAddress, setDeliveryEmailAddress] = useState('');
  const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryHouseNumber, setDeliveryHouseNumber] = useState('');

  // Service option states
  const [showCarWashOptions, setShowCarWashOptions] = useState(false);
  const [showRefuelOptions, setShowRefuelOptions] = useState(false);
  const [showFluidTopupInput, setShowFluidTopupInput] = useState(false);

  // Checkbox change handler for delivery details
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsSameAsCollection(checked);

    if (checked) {
      setDeliveryFullName(fullName);
      setDeliveryEmailAddress(emailAddress);
      setDeliveryPhoneNumber(phoneNumber);
      setDeliveryAddress(collectionAddress);
      setDeliveryHouseNumber(houseNumber);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', {
        plateNumber,
        carModel,
        carBrand,
        carColor,
        fullName,
        emailAddress,
        phoneNumber,
        collectionAddress,
        houseNumber,
        notes,
        deliveryFullName,
        deliveryEmailAddress,
        deliveryPhoneNumber,
        deliveryAddress,
        deliveryHouseNumber,
        pickupDate,
        deliveryDate,
      });
      navigate("/dashboard/Jobs"); // Redirect after submission
    } catch (error) {
      console.error("There was an error creating the job!", error);
    }
  };

  return (
    <div className="Createjob-content">
      <div className="Car-information">
        <h2>Create a New Job</h2>
        <h3>Car Information</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <Input
                  label="Plate Number"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value)}
                  placeholder="Enter Plate Number"
                />
              </td>
              <td>
                <Input
                  label="Car Model (Option)"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder="Enter Car Model"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  label="Car Brand"
                  value={carBrand}
                  onChange={(e) => setCarBrand(e.target.value)}
                  placeholder="Enter Car Brand"
                />
              </td>
              <td>
                <Input
                  label="Car Color"
                  value={carColor}
                  onChange={(e) => setCarColor(e.target.value)}
                  placeholder="Enter Car Color"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="Confirmbtn">Confirm vehicle</button>
      </div>

      {/* Person in Collection section */}
      <div className="Person-in-collection">
        <h3>Person In Collection</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <Input
                  label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter Full Name"
                />
              </td>
              <td>
                <Input
                  label="Email Address"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="Enter Email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter Phone Number"
                />
              </td>
              <td>
                <DropdownInput label="Collection Address" />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  label="House Number"
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                  placeholder="Enter House Number"
                />
              </td>
              <td>
                <ReactDatePicker 
                  label="Pickup Date"
                  selectedDate={pickupDate}
                  onDateChange={setPickupDate}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Person in Delivery section */}
      <div className="Person-in-collection">
        <h3>Person In Delivery</h3>
        <div style={{ display: "flex", gap: "5px" }}>
          <input
            type="checkbox"
            checked={isSameAsCollection}
            onChange={handleCheckboxChange}
          />
          <p>Same Details as Person in Collection</p>
        </div>

        <table>
          <tbody>
            <tr>
              <td>
                <Input
                  label="Full Name"
                  value={deliveryFullName}
                  onChange={(e) => setDeliveryFullName(e.target.value)}
                  placeholder="Enter Full Name"
                />
              </td>
              <td>
                <Input
                  label="Email Address"
                  value={deliveryEmailAddress}
                  onChange={(e) => setDeliveryEmailAddress(e.target.value)}
                  placeholder="Enter Email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  label="Phone Number"
                  value={deliveryPhoneNumber}
                  onChange={(e) => setDeliveryPhoneNumber(e.target.value)}
                  placeholder="Enter Phone Number"
                />
              </td>
              <td>
                <DropdownInput label="Delivery Address" />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  label="House Number"
                  value={deliveryHouseNumber}
                  onChange={(e) => setDeliveryHouseNumber(e.target.value)}
                  placeholder="Enter House Number"
                />
              </td>
              <td>
                <ReactDatePicker 
                  label="Delivery Date"
                  selectedDate={deliveryDate}
                  onDateChange={setDeliveryDate}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes section */}
      <Input 
        label="Notes" 
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Enter Notes"
      />

      {/* Services section */}
      <div style={{ display: "flex", gap: "20px" }}>
        <p>Include Services:</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>Tyre Check</p>
          <Checkbutton />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>Parking</p>
          <Checkbutton />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>Fluid Topup</p>
          <input
            type="checkbox"
            onChange={(e) => setShowFluidTopupInput(e.target.checked)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>Car Wash</p>
          <input
            type="checkbox"
            onChange={(e) => setShowCarWashOptions(e.target.checked)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>Refueling</p>
          <input
            type="checkbox"
            onChange={(e) => setShowRefuelOptions(e.target.checked)}
          />
        </div>
      </div>

      {/* Car wash options */}
      {showCarWashOptions && (
        <div style={{ paddingLeft: "20px", display: "flex", gap: "10px", marginTop: "10px" }}>
          <Checkbutton />
          <p>Car Wash Interior</p>
          <Checkbutton />
          <p>Car Wash Exterior</p>
          <Checkbutton />
          <p>Car Wash Complete</p>
        </div>
      )}

      {/* Refueling options */}
      {showRefuelOptions && (
        <div style={{ paddingLeft: "20px", display: "flex", gap: "10px", marginTop: "10px" }}>
          <Checkbutton />
          <p>Petrol 98</p>
          <Checkbutton />
          <p>Petrol 95</p>
          <Checkbutton />
          <p>Diesel</p>
        </div>
      )}

      {/* Fluid Topup input */}
      {showFluidTopupInput && (
        <div style={{ paddingLeft: "20px", width: "100px", marginTop: "10px" }}>
          <Input 
            label="Fluid Topup Amount" 
            placeholder="$" 
          />
        </div>
      )}

      {/* Total Price section */}
      <div style={{ display: "flex", gap: "20px", height: "40px" }}>
        <h2 style={{ paddingTop: "5px" }}>Total Price</h2>
        <Input placeholder="$" />
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", width: "100%", gap: "20px" }}>
        <div style={{ width: "50%" }}>
          <Link to="/Dashboard">
            <Button title="Back" backgroundColor="#D4DFE7" color="black" />
          </Link>
        </div>
        <div style={{ width: "50%" }}>
          <Link to="/dashboard/Jobs">
            <Button title="Book Now" onClick={handleSubmit} backgroundColor="#27374D" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;