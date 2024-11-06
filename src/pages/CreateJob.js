import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import Checkbutton from "../component/Checkbutton";
import Input from "../component/Input";
import "../pages/CreateJob.css";

const CreateJob = () => {
  // States for various inputs
  const [plateNumber, setPlateNumber] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carColor, setCarColor] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [notes, setNotes] = useState('');

  // States for delivery person details
  const [isSameAsCollection, setIsSameAsCollection] = useState(false);
  const [deliveryFullName, setDeliveryFullName] = useState('');
  const [deliveryEmailAddress, setDeliveryEmailAddress] = useState('');
  const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryHouseNumber, setDeliveryHouseNumber] = useState('');
  const [deliveryPickUpDate, setDeliveryPickUpDate] = useState('');

  // Update delivery details based on checkbox status
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsSameAsCollection(checked);

    if (checked) {
      // Copy collection details to delivery details
      setDeliveryFullName(fullName);
      setDeliveryEmailAddress(emailAddress);
      setDeliveryPhoneNumber(phoneNumber);
      setDeliveryAddress(collectionAddress);
      setDeliveryHouseNumber(houseNumber);
      setDeliveryPickUpDate(pickUpDate);
    } else {
      // Clear delivery details when checkbox is unchecked
      setDeliveryFullName('');
      setDeliveryEmailAddress('');
      setDeliveryPhoneNumber('');
      setDeliveryAddress('');
      setDeliveryHouseNumber('');
      setDeliveryPickUpDate('');
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
                <Input
                  label="Collection Address"
                  value={collectionAddress}
                  onChange={(e) => setCollectionAddress(e.target.value)}
                  placeholder="Enter Collection Address"
                />
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
                <Input
                  label="Pick Up Date"
                  value={pickUpDate}
                  onChange={(e) => setPickUpDate(e.target.value)}
                  placeholder="Enter Pick Up Date"
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
                  value={isSameAsCollection ? fullName : deliveryFullName}
                  onChange={(e) => setDeliveryFullName(e.target.value)}
                  placeholder="Enter Full Name"
                  disabled={isSameAsCollection}
                />
              </td>
              <td>
                <Input
                  label="Email Address"
                  value={isSameAsCollection ? emailAddress : deliveryEmailAddress}
                  onChange={(e) => setDeliveryEmailAddress(e.target.value)}
                  placeholder="Enter Email"
                  disabled={isSameAsCollection}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  label="Phone Number"
                  value={isSameAsCollection ? phoneNumber : deliveryPhoneNumber}
                  onChange={(e) => setDeliveryPhoneNumber(e.target.value)}
                  placeholder="Enter Phone Number"
                  disabled={isSameAsCollection}
                />
              </td>
              <td>
                <Input
                  label="Collection Address"
                  value={isSameAsCollection ? collectionAddress : deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Enter Collection Address"
                  disabled={isSameAsCollection}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  label="House Number"
                  value={isSameAsCollection ? houseNumber : deliveryHouseNumber}
                  onChange={(e) => setDeliveryHouseNumber(e.target.value)}
                  placeholder="Enter House Number"
                  disabled={isSameAsCollection}
                />
              </td>
              <td>
                <Input
                  label="Pick Up Date"
                  value={isSameAsCollection ? pickUpDate : deliveryPickUpDate}
                  onChange={(e) => setDeliveryPickUpDate(e.target.value)}
                  placeholder="Enter Pick Up Date"
                  disabled={isSameAsCollection}
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
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Include Services</p>
        <Checkbutton />
        <p>Car Wash</p>
        <Checkbutton />
        <p>Refueling</p>
      </div>

      {/* Total Price section */}
      <div style={{ display: "flex", gap: "20px", height: "40px" }}>
        <h2 style={{ paddingTop: "5px" }}>Total Price</h2>
        <Input 
          placeholder="$" 
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", width: "100%", gap: "20px" }}>
        <div style={{ width: "50%" }}>
          <Link to="/Dashboard">
            <Button title="Back" backgroundColor="#D4DFE7" color="black" />
          </Link>
        </div>
        <div style={{ width: "50%" }}>
          <Link to="/dashboard/Jobs">
            <Button title="Book Now" backgroundColor="#27374D" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;




// import React,{useState} from "react";
// import { Link } from "react-router-dom";
// import Button from "../component/Button";
// import Checkbutton from "../component/Checkbutton";
// import Input from "../component/Input";
// import "../pages/CreateJob.css";
// const CreateJob = () => {
//   const [inputValue, setInputValue] = useState(''); // State to hold input value

//   // Function to handle input changes
//   const handleInputChange = (event) => {
//       setInputValue(event.target.value); // Update the state with the input value
//   };
//   return (
//     <>
//       <div className="Createjob-content">
//         <div className="Car-information">
//           <h2>Create a New Job</h2>
//           <h3>Car Information</h3>
//           <table>
//             <tr>
//               <td>
//                 <Input label="Plate Number"  value={inputValue}  onChange={handleInputChange}  placeholder="lorem ispum" />
//               </td>
//               <td>
//                 <Input label="Car Model (Option)" placeholder="lorem ispum" />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Input label="Car brand" placeholder="lorem ispum" />
//               </td>
//               <td>
//                 <Input label="Car Color" placeholder="lorem ispum" />
//               </td>
//             </tr>
//           </table>
//           <button className="Confirmbtn">Confirm vehicle</button>
//         </div>

//         <div className="Person-in-collection">
//           <h3>Person In Collection</h3>
//           <table>
//             <tr>
//               <td>
//                 <Input label="Full Name" placeholder="lorem ispum" />
//               </td>
//               <td>
//                 <Input label="Email Address" placeholder="lorem ispum" />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Input label="Phone Number" placeholder="lorem ispum" />
//               </td>
//               <td>
//                 <Input label="Collection Address" placeholder="lorem ispum" />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Input label="House Number" placeholder="lorem ispum" />
//               </td>
//               <td>
//                 <Input label="Pick up Date" placeholder="lorem ispum" />
//               </td>
//             </tr>
//           </table>
//         </div>
//         <div className="Person-in-collection">
//           <h3>Person In Delivery</h3>
//           <div style={{ display: "flex", gap: "5px" }}>
//             <Checkbutton />
//             <p>Same Details as person in Collection</p>
//           </div>

//           <table>
//             <tr>
//               <td>
//                 <Input label="Full Name" placeholder="lorem ispum" />
//               </td>
//               <td>
//                 <Input label="Email Address" placeholder="lorem ispum" />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Input label="Phone Number" placeholder="lorem ispum" />
//               </td>
//               <td>
//                 <Input label="Collection Address" placeholder="lorem ispum" />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Input label="House Number" placeholder="lorem ispum" />
//               </td>
//               <td>
//                 <Input label="Pick up Date" placeholder="lorem ispum" />
//               </td>
//             </tr>
//           </table>
//         </div>
//         <Input label="Notes" />
//         <div style={{ display: "flex", gap: "10px" }}>
//           <p>Include Services</p>
//           <Checkbutton />
//           <p>Car Wash</p>
//           <Checkbutton />
//           <p>Refueling</p>
//         </div>
//         <div style={{ display: "flex", gap: "20px", height: "40px" }}>
//           <h2 style={{ paddingTop: "5px" }}>Total Price</h2>{" "}
//           <Input placeholder="$" />
//         </div>
//         <div style={{ display: "flex", width: "100%", gap: "20px" }}>
//           <div style={{ width: "50%" }}>
//             {" "}
//             <Link to="/Dashboard">
//               {" "}
//               <Button title="Back" backgroundColor="#D4DFE7" color="black" />
//             </Link>
//           </div>
//           <div style={{ width: "50%" }}>
//             <Link to="/Jobs">
//               {" "}
//               <Button title="Book Now" backgroundColor="#27374D" />{" "}
//             </Link>{" "}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateJob;
