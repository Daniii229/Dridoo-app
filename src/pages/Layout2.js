import React, { useState, useEffect } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "../component/Dhead.css";
import Slider from "../component/Slider";
import '../pages/Dashboard.css';

const Layout2 = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(true);

  // Toggle function to show or hide the slider
  function onHandleClickSlider() {
    setIsSliderOpen(prevState => !prevState);
  }

  // useEffect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      // If screen width is more than 992px, ensure the slider is visible
      if (window.innerWidth > 992) {
        setIsSliderOpen(true);
      }
    };

    // Attach resize listener
    window.addEventListener("resize", handleResize);

    // Initial check when the component mounts
    handleResize();

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        {isSliderOpen && <Slider />}
        <div className="MainContent">
          <div className="headitems">
            <div className="search-input">
              <div 
                onClick={onHandleClickSlider}
                className="bars" 
                style={{ paddingTop: "5px", cursor: "pointer" }}
              >
                <FaBars fontSize={20} />
              </div>
              <input placeholder="Search" type="text" />
            </div>
            <div className="User-data">
              <FaBell />
              <img src={require("../Images/03.png")} alt="User" />
              <p>Administrator</p>
            </div>
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout2;




// import React from "react";
// import { Outlet } from "react-router-dom";
// import Dhead from "../component/Dhead";
// import Slider from "../component/Slider";
// import '../pages/Dashboard.css';


// const Layout2 = () => {
 

 
     
//   return (
//     <>
//       <div style={{ display: "flex" }}>
//         <Slider  />
//         <div className="MainContent">
//           <Dhead />
//           <main>
//               <Outlet/>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout2;
