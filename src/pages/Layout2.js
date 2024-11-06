import React from "react";
import Slider from "../component/Slider";
import Dhead from "../component/Dhead";
import { Outlet } from "react-router-dom";
import '../pages/Dashboard.css'


const Layout2 = () => {

    
  return (
    <>
      <div style={{ display: "flex" }}>
        <Slider  />
        <div className="MainContent">
          <Dhead />
          <main>
              <Outlet/>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout2;
