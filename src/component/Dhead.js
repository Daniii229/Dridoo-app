// Dhead.js
import React from "react";
import { FaBars, FaBell } from "react-icons/fa";
import "../component/Dhead.css";

const Dhead = () => {
 
  function Onhandleclickslider() {
       
  }

  return (
    <div className="headitems">
      <div className="search-input">
      
        <div onclick={Onhandleclickslider} className="bars" style={{ paddingTop: "5px", cursor: "pointer" }}>
          <  FaBars fontSize={20} />
         
        </div>
        <input 
  placeholder="Search"  
  type="text" 
// Select the text when focused
/>      </div>
      <div className="User-data">
        <FaBell />
        <img src={require("../Images/03.png")} alt="User" />
        <p>Administrator</p>
      </div>
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
