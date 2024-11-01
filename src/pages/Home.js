import React from "react";
import "../../src/Styles/Menu.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Home = () => {
  
  return (
    <>
      <div className="Row1">                                                        {/*This is Row 1 content*/}
        <div className="Row1left">
          <ul>
            <li>
              <h2>Optimizing Fleet</h2>
            </li>
            <li>
              <h2 style={{ textAlign: "end" }}>Services together</h2>
            </li>
            <li>
              <p>
                Welcome to our cutting-edge platform designed to empower your
                business with dynamic technology solutions. We specialise in
                optimising your operations and services, offering seamless
                automation for scalable growth.
              </p>
            </li>
            <li style={{ textAlign: "center" }}>
              <button className="BusinessSolutionButton">
                Business Solution
              </button>
              <button className="DriveWithUsButton">Drive With Us</button>
            </li>
          </ul>
        </div>
        <div className="Row1right">
          <img src={require("../Images/HomeImages/01.PNG")} alt="" />{" "}
        </div>
      </div>
      
      <div className="Row2">                                          {/*This is Row 2 content*/}
          <div className="Row2Background">
            <div className="Row2Box"></div>
          </div> 
      </div>                                                             

      <div className="Row3">                                                             {/*This is Row 3 content*/}
         <h2 style={{fontSize:"54px" , color:"black", textAlign:"center"}} >Services</h2>
         <div className="Row3Col">
         <div className="Row3left">
          <div className="Row3leftup">
            <ul>
              <li> <img src={require("../Images/HomeImages/03.png")} alt="" /></li>
              <li> <h3 style={{fontWeight:"700", fontSize:"24px", color:"black"}}> Fleet Services </h3></li>
              <li> <p style={{fontWeight:"400", fontSize:"19px", lineHeight:"23px"}}>Efficiently manage all aspects of your fleet, including delivery and collection, car washing, fluid
              top-ups, and refueling. Our  comprehensive solution enhances productivity, reduces operational costs, and minimizes your downtime.</p></li>
            </ul>
          </div>
          <div className="Row3leftdown">
          <ul>
              <li> <img src={require("../Images/HomeImages/03.png")} alt="" /></li>
              <li> <h3 style={{fontWeight:"700", fontSize:"24px", color:"black"}}> Driver Community<br></br> Engagement </h3></li>
              <li> <p style={{fontWeight:"400", fontSize:"19px", lineHeight:"23px"}}>Efficiently manage all aspects of your fleet, including delivery and collection, car washing, fluid
              top-ups, and refueling. Our  comprehensive solution enhances productivity, reduces operational costs, and minimizes your downtime.</p></li>
            </ul>
            </div>
         </div>
         <div className="Row3center">
         <img src={require("../Images/HomeImages/02.png")} alt="" />
         </div>
         <div className="Row3right">
         <div className="Row3rightup">
          <ul>
              <li> <img src={require("../Images/HomeImages/03.png")} alt="" /></li>
              <li> <h3 style={{fontWeight:"700", fontSize:"24px", color:"black"}}> Driver Marketplace </h3></li>
              <li> <p style={{fontWeight:"400", fontSize:"19px", lineHeight:"23px"}}>Efficiently manage all aspects of your fleet, including delivery and collection, car washing, fluid
              top-ups, and refueling. Our  comprehensive solution enhances productivity, reduces operational costs, and minimizes your downtime.</p></li>
            </ul>
            </div>
            <div className="Row3rightdown">
          <ul>
              <li> <img src={require("../Images/HomeImages/03.png")} alt="" /></li>
              <li> <h3 style={{fontWeight:"700", fontSize:"24px", color:"black"}}> Technology-Driven<br></br> Client Experience </h3></li>
              <li> <p style={{fontWeight:"400", fontSize:"19px", lineHeight:"23px"}}>Efficiently manage all aspects of your fleet, including delivery and collection, car washing, fluid
              top-ups, and refueling. Our  comprehensive solution enhances productivity, reduces operational costs, and minimizes your downtime.</p></li>
            </ul>
            </div>
         </div>
         </div>
      </div>    

      <div className="Row4">                                          {/*This is Row 4 content*/}
         <div className="Row4left">
               <h2>“</h2>
               <h3>With Dridoo, I was able to slash our fixed costs and improve our quality of service for our customers.</h3>
               <p>Oussama Arfaoui - Operations Manager Virtuo</p>
         </div>
         <div  className="Row4right"> 
         <img src={require("../Images/HomeImages/04.PNG")} alt="" />
         </div>
      </div>     

      <div className="Row5">                                              {/*This is Row 5 content*/}
        <h3> Our service & product caters for all Fleets’ </h3>
          <div className="Row5Coloumns">
            <div className="Row5left">
            <div className="Row5Col-1">
            <img src={require("../Images/HomeImages/07.png")} alt="" />
             <h4 >Rent a Car</h4>
             <p >We offer 5 star adhoc services that can improve the car buying journey. From final cleaning to delivery to customers doors, we can accelerate your customers’ experience.</p>
            </div>
            <div className="Row5Col-2">
            <img src={require("../Images/HomeImages/05.png")} alt="" />
             <h4>Car Sharing</h4>
             <p>We offer 5 star adhoc services that can improve the car buying journey. From final cleaning to delivery to customers doors, we can accelerate your customers’ experience.</p>
            </div>
            </div>
            <div className="Row5right">
            <div className="Row5Col-3">
            <img src={require("../Images/HomeImages/06.png")} alt="" />
             <h4>Dealership</h4>
             <p>We offer 5 star adhoc services that can improve the car buying journey. From final cleaning to delivery to customers doors, we can accelerate your customers’ experience.</p>
            </div>
            <div className="Row5Col-4">
            <img src={require("../Images/HomeImages/07.png")} alt="" />
             <h4>Fleets</h4>
             <p>We offer 5 star adhoc services that can improve the car buying journey. From final cleaning to delivery to customers doors, we can accelerate your customers’ experience.</p>
            </div>
            </div>
        </div>
      </div>  

      <div className="Row6">                                          {/*This is Row 6 content*/}
         <div className="Row6left">
               <h3>Transform your Business with <span className="JustaClick">Just a Click</span></h3>
               <p>By leveraging our cutting-edge technology, businesses can optimise their fleets, streamline their services, and automate crucial processes, resulting in cost-effective and efficient operations. We provide tailor-made solutions to meet the specific needs of car rental services, enabling seamless automation for end-to-end delivery solutions</p>
         </div>
         <div  className="Row6right"> 
         <img src={require("../Images/HomeImages/08.png")} alt="" />
         </div>
      </div>    

      <div className="Row7">                                          {/*This is Row 7 content*/}
         <div className="Row7left">
         <img src={require("../Images/HomeImages/09.PNG")} alt="" />

         </div>
         <div  className="Row7right"> 
          <h2>DRIVE WITH US</h2>
          <h3>Interested in driving with us? <br></br>
          Find out more below</h3>
        <div className="apply" style={{display:"flex", gap:"10px"}}><p>Apply Here </p> <FaArrowAltCircleRight color="#27374D" fontSize={30}  /></div> 
         </div>
      </div>                                      
    </>
  );
};

export default Home;
