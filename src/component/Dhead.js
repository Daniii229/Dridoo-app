// Dhead.js
import React, { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import Slider from "./Slider"; // Ensure this path is correct
import "../component/Dhead.css";

const Dhead = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(prev => !prev); // Toggle the slider open/close
  };

  return (
    <div className="headitems">
      <div className="search-input">
        <div className="bars" onClick={toggleSlider} style={{ paddingTop: "5px", cursor: "pointer" }}>
          <FaBars fontSize={20} />
        </div>
        <input placeholder="Search" type="text" />
      </div>
      <div className="User-data">
        <FaBell />
        <img src={require("../Images/03.png")} alt="User" />
        <p>Administrator</p>
      </div>
      {isSliderOpen && <Slider />} {/* Render the Slider conditionally */}
    </div>
  );
};

export default Dhead;




// import React from "react";
// import { FaBars, FaBell } from "react-icons/fa";
// import "../component/Dhead.css";

// const Dhead = () => {
//   return (
//     <div className="headitems">
//       <div className="search-input">
//         <div className="bars" style={{ paddingTop: "5px" }}>
//           {" "}
//           <FaBars fontSize={20} />
//         </div>
//         <input placeholder="Search"  type="text" />
//       </div>
//       <div className="User-data">
//         <FaBell />
//         <img src={require("../Images/03.png")} alt="" />
//         <p>Administrator</p>
//       </div>
//     </div>
//   );
// };

// export default Dhead;
