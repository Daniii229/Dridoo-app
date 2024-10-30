import React from 'react';
import './Popup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Popup = (props) => {
  const { mode, setMode } = props;

  // Switch between login, register, and forgot password based on mode
  const renderFormContent = () => {
    switch (mode) {
      case 'login':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Sign To Your Account</h3></li>
          <li><img src= { require('../Images/02.png') } alt='' width={200} /></li>

            <li><input type='email' placeholder='johndoe@domain.com'></input></li>
            <li><input type='password' placeholder='..........'></input></li>
            <li style={{ paddingLeft: "45px", display: "flex", gap: "5px", color: "white" }}>
              <input style={{ padding: "0px", height: "15px", width: "15px" }} type='Checkbox'></input> Remember me
            </li>
            <li style={{ color: "white", textAlign:"start", marginLeft:"40px", cursor: "pointer" }} onClick={() => setMode('forgotPassword')}>Forgot Password?</li>
            <li><button>Login</button></li>
            <li style={{ color: "white" }}>Don't have an account? <span onClick={() => setMode('register')} style={{ cursor: "pointer" }}>Register</span></li>
          </>
        );
      case 'register':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
          <li><img src= { require('../Images/02.png') } alt='' width={200} /></li>

            <li><input type='email' placeholder='johndoe@domain.com'></input></li>
            <li><input type='password' placeholder='..........'></input></li>
            <li><button onClick={() => setMode('Companyregister')} >Sign Up</button></li>
            <li style={{ color: "white" }}>Already have an account? <span onClick={() => setMode('login')} style={{ cursor: "pointer" }}>Login</span></li>
          </>
        );
        case 'Companyregister':
          return (
            <>
              <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
            <li><img src= { require('../Images/02.png') } alt='' width={200} /></li>
  
              <li><input type='text' placeholder='Your Name'></input></li>
              <li><input type='text' placeholder='Your Position'></input></li>
              <li><input type='text' placeholder='Company Name'></input></li>
              <li><input type='text' placeholder='Company Phone Number'></input></li>
              <li><input type='text' placeholder='Company address'></input></li>


              <li><button onClick={() => setMode('ContactInfo')}>Next</button></li>
              <li><button onClick={() => setMode('register')}>Back</button></li>

            </>
          );
          case 'ContactInfo':
            return (
              <>
                <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
              <li><img src= { require('../Images/02.png') } alt='' width={200} /></li>
    
                <li><input type='text' placeholder='Contact Name'></input></li>
                <li><input type='text' placeholder='Contact Job Title'></input></li>
                <li><input type='email' placeholder='Contact Email'></input></li>
                <li><button onClick={() => setMode('AlternativeContactinfo')}>Next</button></li>
                <li><button onClick={() => setMode('Companyregister')}>Back</button></li>

              </>
            );
            case 'AlternativeContactinfo':
              return (
                <>
                  <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Register Yourself & Your Company</h3></li>
                <li><img src= { require('../Images/02.png') } alt='' width={200} /></li>
      
                  <li><input type='text' placeholder='Alternative Contact Name'></input></li>
                  <li><input type='text' placeholder='Alternative Contact Job Title'></input></li>
                  <li><input type='email' placeholder='Alternative Contact Email'></input></li>
                  <li><button>Sign Up</button></li>
                  <li><button onClick={() => setMode('ContactInfo')}>Back</button></li>

                </>
              );

      case 'forgotPassword':
        return (
          <>
            <li><h3 style={{ color: "white", marginBottom: "-15px" }}>Forgot Password</h3></li>
            <li><input type='email' placeholder='Enter your email'></input></li>
            <li><button>Reset Password</button></li>
            <li style={{ color: "white" }}>Remember your password? <span onClick={() => setMode('login')} style={{ cursor: "pointer" }}>Login</span></li>
          </>
        );
      default:
        return null;
    }
  };

  return (props.trigger) ? (
    <div className='loginPopup'>
      <div className='Popup-inner'>
        <ul>
          <li style={{ display: "flex", justifyContent: "flex-end", color: "white" }}>
            <FontAwesomeIcon onClick={() => props.setTrigger(false)} icon={faClose} />
          </li>
          {renderFormContent()}
        </ul>
      </div>
    </div>
  ) : "";
}

export default Popup;


// import { faClose } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from 'react';
// import './Popup.css';




// const Popup = (props, ) => {

 
   
//   return ( props.trigger) ? (
//     <>
  
//     <div className='loginPopup'>
//      <div className='Popup-inner'>
//       {props.children}
//         <ul>
          
//         <li style={{display:"flex", justifyContent:"flex-end", color:"white"}}  ><FontAwesomeIcon onClick={() => props.setTrigger(false)} icon={faClose} /></li>
//             <li> <h3 style={{color:"white", marginBottom:"-15px"}}>{props.title} Sign up your Account </h3></li>
//             <li><img src= { require('../Images/02.png') } alt='' width={200} /></li>
//             <li><input type='email' placeholder='johndoe@domain.com'></input></li>
//             <li><input type='password' placeholder='..........'></input></li>
//             <li style={{paddingLeft:"45px", display:"flex", gap:"5px", color:"white"}} ><input style={{ padding:"0px", height:"15px", width:"15px"}} type='Checkbox'></input> Remember me</li>
//             <li style={{color:"white", display:"flex",paddingLeft:"45px", fontSize:"10px"}} >Forgot Password</li>
//             <li><button>Login</button></li>
//             <li style={{color:"white"}}>Don't have and account?</li>

//         </ul>
//         </div>
//     </div>
//     </>
//   ) : "";
// }

// export default Popup