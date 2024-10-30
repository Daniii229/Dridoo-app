import React from 'react';
import './Popup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons';


const Popup = (props) => {
  return ( props.trigger) ? (
    <>
    <div className='loginPopup'>
     <div className='Popup-inner'>
      {props.children}
        <ul>
          
        <li style={{display:"flex", justifyContent:"flex-end", color:"white"}}  ><FontAwesomeIcon onClick={() => props.setTrigger(false)} icon={faClose} /></li>
            <li> <h3 style={{color:"white", marginBottom:"-15px"}}>{props.title}</h3></li>
            <li><img src= { require('../Images/02.png') } alt='' width={200} /></li>
            <li><input type='email' placeholder='johndoe@domain.com'></input></li>
            <li><input type='password' placeholder='..........'></input></li>
            <li style={{paddingLeft:"45px", display:"flex", gap:"5px", color:"white"}} ><input style={{ padding:"0px", height:"15px", width:"15px"}} type='Checkbox'></input> Remember me</li>
        
            <li><button>Sign Up</button></li>
            <li style={{color:"white"}}>Already have and account?</li>

        </ul>
        </div>
    </div>
    </>
  ) : "";
}




export default Popup