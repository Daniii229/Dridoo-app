import React, { useState } from 'react';
import '../component/MyHeader.css';
import { Link } from "react-router-dom";
import Popup from '../component/Popup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MyHeader = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupMode, setPopupMode] = useState('login'); // 'login', 'register', 'forgotPassword'
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to open the popup with a specific mode
  const openPopup = (mode) => {
    setPopupMode(mode);
    setButtonPopup(true);
  };

  return (
    <>
      <Popup 
        trigger={buttonPopup} 
        setTrigger={setButtonPopup} 
        mode={popupMode} 
        setMode={setPopupMode}
      />

      <div className='header'>
        <div className='logo'>
          <Link to="/Home"> 
            <img src={require('../Images/01.png')} alt='' />
          </Link>
        </div>

        <div className='HeaderMenu'>
          <ul className={menuOpen ? "open" : ""}>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/BusinessSolution">Business Solution</Link></li>
            <li><Link to="/DriveWithUs">Drive With Us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className='menubardisplay'>
          <button className='loginBtn' onClick={() => openPopup('login')}>Login</button>
          {/* <button className='loginBtn' onClick={() => openPopup('register')}>Register</button> */}
          <div className='menubars' onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyHeader;



// import React from 'react'

// import '../component/MyHeader.css';
// import {  Link } from "react-router-dom";
// import Popup from '../component/Popup';
// import { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from '@fortawesome/free-solid-svg-icons';


// const MyHeader = () => {
//   const[buttonPopup, setButton] = useState(false);
//   const[menuOpen, setMenuOpen] = useState(false)
//   return (
//     <>
//     <Popup trigger={buttonPopup} setTrigger= {setButton}></Popup>
//     <div className='header'>
//         <div className='logo'>
//         <Link to="/Home"> <img src= { require('../Images/01.png') } alt='' /></Link>
      
   
//         </div>
//         <div className='HeaderMenu'>
//         <ul className={menuOpen ? "open" : ""}>
         
//           <li>
//             <Link to="/AboutUs">About Us</Link>
//           </li>
//           <li>
//             <Link to="/BusinessSolution">Business Solution</Link>
//           </li>
//           <li>
//             <Link to="/DriveWithUs">Drive With Us</Link>
//           </li>
//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>
//         </ul>
//         </div>
//         <div className='menubardisplay'>
//           <button className='loginBtn' onClick={() => setButton(true) }>Login</button>
//           <div className='menubars' onClick={() => setMenuOpen(!menuOpen)}> <FontAwesomeIcon  icon={faBars} /></div>
//         </div>
       

        
//     </div>
//     </>
   
//   )
// }

// export default MyHeader
