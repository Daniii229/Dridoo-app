import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import BusinessSolution from "./pages/BusinessSolution";
import Contact from "./pages/Contact";
import DriveWithUs from "./pages/DriveWithUs";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Test from "./pages/Test";
import Dashboard from "./pages/Dashboard";
import CreateJob from "./pages/CreateJob";
import Jobs from "./pages/Jobs";
import FutureJobs from "./pages/FutureJobs";
import CompletedJobs from "./pages/CompletedJobs";
import CanceledJobs from "./pages/CanceledJobs";
import List from "./pages/List";
import Timeline from "./pages/Timeline";
import Pricing from "./pages/Pricing";
import Drivers from "./pages/Drivers";
import Users from "./pages/Users";
import CX from "./pages/CX";
import SelectJob from "./pages/SelectJob";
import Support from "./pages/Support";
import CustomerCompany from "./pages/CustomerCompany";
import Kanban from "./pages/Kanban";
import MultipleJob from "./pages/MultipleJob";
import Layout2 from "./pages/Layout2";

//import Popup from './component/Popup';
//import { useState } from 'react';
//import MyHolder from './component/MyHolder';
const App = () => {
  // const[buttonPopup, setButton] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/BusinessSolution" element={<BusinessSolution />} />
            <Route path="/DriveWithUs" element={<DriveWithUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Test"  element={<Test/>}/>

          </Route>
          
          <Route path="/" element={<Layout2 />}>
          <Route path="/Dashboard"  element={<Dashboard/>}/>
          <Route path="/CreateJob"  element={<CreateJob/>}/>
          <Route path="/Jobs"  element={<Jobs/>}/>
          <Route path="/FutureJobs"  element={<FutureJobs/>}/>
          <Route path="/CompletedJobs"  element={<CompletedJobs/>}/>
          <Route path="/CanceledJobs"  element={<CanceledJobs/>}/>
          <Route path="/List"  element={<List/>}/>
          <Route path="/Timeline"  element={<Timeline/>}/>
          <Route path="/Pricing"  element={<Pricing/>}/>
          <Route path="/Drivers"  element={<Drivers/>}/>
          <Route path="/Users"  element={<Users/>}/>
          <Route path="/CX"  element={<CX/>}/>
          <Route path="/SelectJob"  element={<SelectJob/>}/>
          <Route path="/Support"  element={<Support/>}/>
          <Route path="/CustomerCompany"  element={<CustomerCompany/>}/>
          <Route path="/Kanban"  element={<Kanban/>}/>
          <Route path="/MultipleJob"  element={<MultipleJob/>}/>














          



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
