import React from "react";
import Card from "../component/Card";
import "../pages/Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="bodycontent">
            <Card
              title="Car Collection/Delivery"
              color="aqua"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Wash Battery"
              color="bisque"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Charge Battery"
              color="lightskyblue"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Refueling"
              color=""
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Partner"
              color="lightgrey"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
      </div>
    </>
  );
};

export default Dashboard;
