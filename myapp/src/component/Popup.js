import React, { useState } from 'react';
import './Popup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomAlertPopup from './CustomAlertPopup';

const Popup = (props) => {
  const navigate = useNavigate();
  const { mode, setMode } = props;

  // Initial form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    position: '',
    companyName: '',
    companyPhone: '',
    companyAddress: '',
    contactName: '',
    contactJobTitle: '',
    contactEmail: '',
    altContactName: '',
    altContactJobTitle: '',
    altContactEmail: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Login function
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data.message);
        alert('Login successful!'); // Show success alert
        navigate('/Dashboard'); // Navigate to the dashboard
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      alert('Invalid login credentials.'); // Show error alert
    }
  };

  // Registration function
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert(response.data.message); // Show registration success message
      setMode('emailVerification'); // Set mode to email verification after registration
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };
  

  const handleEmailVerification = async () => {
    // Email verification logic goes here
  };

  const renderFormContent = () => {
    switch (mode) {
      case 'login':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Sign Into Your Account</h3></li>
            <li><img src={require('../Images/02.png')} alt='' width={200} /></li>
            <li><input type='email' name="email" placeholder='johndoe@domain.com' onChange={handleChange} value={formData.email} /></li>
            <li><input type='password' name="password" placeholder='..........' onChange={handleChange} value={formData.password} /></li>
            <li style={{ paddingLeft: "45px", display: "flex", gap: "5px", color: "white" }}>
              <input style={{ padding: "0px", height: "15px", width: "15px" }} type='checkbox' /> Remember me
            </li>
            <li style={{ color: "white", textAlign: "start", marginLeft: "40px", cursor: "pointer" }} onClick={() => setMode('forgotPassword')}>Forgot Password?</li>
            <li><button onClick={handleLogin}>Login</button></li>
            <li style={{ color: "white" }}>Don't have an account? <span onClick={() => setMode('register')} style={{ cursor: "pointer" }}>Register</span></li>
            {/* <TopRightAlert message="Incorrect Email & Password " backgroundColor="brown" /> */}
          </>
        );

      case 'register':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
            <li><img src={require('../Images/02.png')} alt='' width={200} /></li>
            <li><input type='email' name="email" placeholder='johndoe@domain.com' onChange={handleChange} value={formData.email} /></li>
            <li><input type='password' name="password" placeholder='..........' onChange={handleChange} value={formData.password} /></li>
            <li><button onClick={() => setMode('Companyregister')}>Next</button></li>
            <li style={{ color: "white" }}>Already have an account? <span onClick={() => setMode('login')} style={{ cursor: "pointer" }}>Login</span></li>
          </>
        );

      case 'emailVerification':
        return <CustomAlertPopup title="Email Verification is pending, please check your email" />;

      // case 'AlertVerificationCompanyUp':
      //   return <CustomAlertPopup title="We are currently verifying your Company. We’ll let you know once approved. Thank you." />;

      case 'Companyregister':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
            <li><img src={require('../Images/02.png')} alt='' width={200} /></li>
            <li><input type='text' name="name" placeholder='Your Name' onChange={handleChange} value={formData.name} /></li>
            <li><input type='text' name="position" placeholder='Your Position' onChange={handleChange} value={formData.position} /></li>
            <li><input type='text' name="companyName" placeholder='Company Name' onChange={handleChange} value={formData.companyName} /></li>
            <li><input type='text' name="companyPhone" placeholder='Company Phone Number' onChange={handleChange} value={formData.companyPhone} /></li>
            <li><input type='text' name="companyAddress" placeholder='Company Address' onChange={handleChange} value={formData.companyAddress} /></li>
            <li><button onClick={() => setMode('ContactInfo')}>Next</button></li>
            <li><button onClick={() => setMode('register')}>Back</button></li>
          </>
        );

      case 'ContactInfo':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
            <li><img src={require('../Images/02.png')} alt='' width={200} /></li>
            <li><input type='text' name="contactName" placeholder='Contact Name' onChange={handleChange} value={formData.contactName} /></li>
            <li><input type='text' name="contactJobTitle" placeholder='Contact Job Title' onChange={handleChange} value={formData.contactJobTitle} /></li>
            <li><input type='email' name="contactEmail" placeholder='Contact Email' onChange={handleChange} value={formData.contactEmail} /></li>
            <li><button onClick={() => setMode('AlternativeContactInfo')}>Next</button></li>
            <li><button onClick={() => setMode('Companyregister')}>Back</button></li>
          </>
        );

      case 'AlternativeContactInfo':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
            <li><img src={require('../Images/02.png')} alt='' width={200} /></li>
            <li><input type='text' name="altContactName" placeholder='Alternative Contact Name' onChange={handleChange} value={formData.altContactName} /></li>
            <li><input type='text' name="altContactJobTitle" placeholder='Alternative Contact Job Title' onChange={handleChange} value={formData.altContactJobTitle} /></li>
            <li><input type='email' name="altContactEmail" placeholder='Alternative Contact Email' onChange={handleChange} value={formData.altContactEmail} /></li>
            <li><button onClick={handleRegister}>Sign Up</button></li>
            <li><button onClick={() => setMode('ContactInfo')}>Back</button></li>
          </>
        );

      case 'forgotPassword':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Forgot Password</h3></li>
            <li><input type='email' name="email" placeholder='Enter your email' onChange={handleChange} value={formData.email} /></li>
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
          <li style={{ display: "flex", justifyContent: "flex-end" }}>
            <FontAwesomeIcon icon={faClose} onClick={() => props.setTrigger(false)} />
          </li>
          {renderFormContent()}
        </ul>
      </div>
    </div>
  ) : null;
};

export default Popup;
