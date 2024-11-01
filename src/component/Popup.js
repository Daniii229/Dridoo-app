import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import CustomAlertPopup from './CustomAlertPopup';
import TopRightAlert from './TopRightAlert';
import './Popup.css';

const Popup = (props) => {
  const { mode, setMode } = props;

  // State to show alerts
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Function to show a success alert for login
  const handleLoginSuccessful = () => {
    setAlertMessage("Login Successful");
    setShowAlert(true);
  };

  // Function to show email verification alert
  const handleEmailVerification = () => {
    setAlertMessage("Verification code sent! Please check your email.");
    setShowAlert(true);
  };

 

  const renderFormContent = () => {
    switch (mode) {
      case 'login':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Sign To Your Account</h3></li>
            <li><img src={require('../Images/02.png')} alt='' width={200} /></li>
            <li><input type='email' placeholder='johndoe@domain.com'></input></li>
            <li><input type='password' placeholder='..........'></input></li>
            <li style={{ paddingLeft: "45px", display: "flex", gap: "5px", color: "white" }}>
              <input style={{ padding: "0px", height: "15px", width: "15px" }} type='Checkbox'></input> Remember me
            </li>
            <li style={{ color: "white", textAlign: "start", marginLeft: "40px", cursor: "pointer" }} onClick={() => setMode('forgotPassword')}>Forgot Password?</li>
            <li><button onClick={handleLoginSuccessful}>Login</button></li>
            <li style={{ color: "white" }}>Don't have an account? <span onClick={() => setMode('register')} style={{ cursor: "pointer" }}>Register</span></li>
            <TopRightAlert message="Incorrect Email & Password " backgroundColor=" brown"/>
          </>
        );

      case 'register':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
            <li><img src={require('../Images/02.png')} alt='' width={200} /></li>
            <li><input type='email' placeholder='johndoe@domain.com'></input></li>
            <li><input type='password' placeholder='..........'></input></li>
            <li onClick={alert('This email is already in use')} ><button onClick={() => setMode('Companyregister') }>Next</button></li>
            <li style={{ color: "white" }}>Already have an account? <span onClick={() => setMode('login')} style={{ cursor: "pointer" }}>Login</span></li>
          </>
        );

      case 'AlertSignUp':
        return (
          <CustomAlertPopup title="Email Verification is pending, please check your email" />

          
          
        );
        case 'AlertVerificationCompanyUp':
          return (
            <CustomAlertPopup title="We are currently verifying your Company we'll let you once get approved. Thank You" />
            
          );

      case 'forgotPassword':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Forgot Password</h3></li>
            <li><input type='email' placeholder='Enter your email'></input></li>
            <li><button onClick={handleEmailVerification}>Send Verification Code</button></li>
            <li style={{ color: "white" }}>Remember your password? <span onClick={() => setMode('login')} style={{ cursor: "pointer" }}>Login</span></li>
          </>
        );

      default:
        return null;
    }
  };

  return props.trigger ? (
    <div className='loginPopup'>
      <div className='Popup-inner'>
        <ul>
          <li style={{ display: "flex", justifyContent: "flex-end", color: "white" }}>
            <FontAwesomeIcon onClick={() => props.setTrigger(false)} icon={faClose} />
          </li>
          {renderFormContent()}
        </ul>
      </div>

      {/* Render the alert when showAlert is true */}
      {showAlert && <TopRightAlert message={alertMessage} />}
    </div>
  ) : "";
  
};


export default Popup;
