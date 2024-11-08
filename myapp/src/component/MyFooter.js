import React from "react";
import { Link } from "react-router-dom";
import "../component/Myfooter.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MyFooter = () => {
  return (
    <>
      <div className="FooterContainer">
        <div
        className="FooterUpper">
          <div className="FooterContent">
            <ul>
              <li>
                <h3>Book your <span style={{color:"#F4AF00"}}>dridoo</span>  now!</h3>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad {" "}
                </p>
              </li>
              <li><button className="ContactUsButton">Contact Us</button></li>
            </ul>
          </div>
        </div>
        <div className="Footer">
          <div className="logo" >
            <Link to="/Home">
             
              <img src={require("../Images/01.png")} alt="" />
            </Link>
          </div>
          <div className="FooterMenu" >
            <ul>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/BusinessSolution">Business Solution</Link>
              </li>
              <li>
                <Link to="/DriveWithUs">Drive With Us</Link>
              </li>
            </ul>
          </div>
          <div className="SocialMedia">
            <div className="SocailMediaIcons">
              <ul>
                <li>
                  
                <Link to="https://www.facebook.com/"><FaFacebook/> </Link>               </li>
                <li>
                <Link to="https://www.twitter.com/"><FaTwitter/> </Link>   
                </li>
                <li>
                
                <Link to="https://www.instagram.com/"><FaInstagram/> </Link>   
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p>Copyrights © 2023 dridoo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFooter;
