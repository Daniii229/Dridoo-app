import React from "react";

import {
  FaBriefcase,
  FaCalendar,
  FaCar,
  FaChargingStation,
  FaCog,
  FaPlus,
  FaTh,
  FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../component/Slider.css";
import Dropdownitem from "./Dropdownitem";


const Slider = ({ className }) => {
  
  return (
    
    <div className="slider"  >
      <img src={require("../Images/01.png")} alt="" />
      <Link to="/Dashboard"> <button className="Createbutton">
        <FaPlus /> Create a Job
      </button></Link>
     

      <Dropdownitem
        title="Dashboard"
        items={["Operational Performance", "Financial Management", "Strategic Insights"]}
        links={["/dashboard/performance", "/dashboard/financial", "/dashboard/insights"]}
        icon={<FaTh />}
      />

      <Dropdownitem
        title="Job"
        items={["Today's", "Future", "Completed", "Cancelled"]}
        links={["/dashboard/Jobs", "/dashboard/FutureJobs", "/dashboard/CompletedJobs", "/dashboard/CanceledJobs"]}
        icon={<FaBriefcase />}
      />

      <Dropdownitem
        title="Scheduler"
        items={["Timeline", "List", "Kanban"]}
        links={["/dashboard/Timeline", "/dashboard/List", "/dashboard/Kanban"]}
        icon={<FaCalendar />}
      />

      <Dropdownitem
        title="Configuration"
        items={["Pricing", "Drivers", "Company", "Setting"]}
        links={["/dashboard/Pricing", "/dashboard/Drivers", "/dashboard/CustomerCompany", "/dashboard/Settings"]}
        icon={<FaCog />}
      />

      <Dropdownitem
        title="Admin"
        items={["Users", "CX", "Support"]}
        links={["/dashboard/Users", "/dashboard/CX", "/dashboard/Support"]}
        icon={<FaUser />}
      />
      
      <Dropdownitem
        title="Fleet"
        items={["Coming soon"]}
        links={["/Dashboard"]}
        icon={<FaCar />}
      />
      
      <Dropdownitem
        title="Station"
        items={["Coming soon"]}
        links={["/Dashboard"]}
        icon={<FaChargingStation />}
      />
      
    </div>
  );
};

export default Slider;
