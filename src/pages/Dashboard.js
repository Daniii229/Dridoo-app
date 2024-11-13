import React from "react";
import Card from "../component/Card";
import "../pages/Dashboard.css";

const Dashboard = () => {
  return (
    <>
     <div className="Services">

       <h1>Services</h1>
      <div className="bodycontent">
            <Card
              title="Car Collection/Delivery"
              color="rgba(13, 150, 95, 0.1)"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Wash Battery"
               color1="rgba(39, 55, 77, 0)" 
               color2="rgba(39, 55, 77, 0.19)"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Charge Battery"
               color1="rgba(23, 89, 74, 0)"
               color2="rgba(23, 89, 74, 0.2444)"
              
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Refueling"
              color1="rgba(255, 224, 0, 0.1128)"
              color2="rgba(255, 224, 0, 0.47)"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Partner"
              color="rgba(225, 134, 87, 0.17)"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
      </div>
      </div>
    </>
  );
};

export default Dashboard;
