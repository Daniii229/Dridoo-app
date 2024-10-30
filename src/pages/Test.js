
import { useState } from "react";

const Popup = ({ isOpen, onClose }) => {
    // State to manage if the form is for login or register
    const [isLogin, setIsLogin] = useState(true);
  
    // Toggle function to switch between login and register
    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
  
    // Close the popup
    const closePopup = () => {
      onClose();
    };
  
    if (!isOpen) return null; // If the popup is not open, don't render anything
  
    return (
      <div className="popup">
        <div className="popup-content">
          <button className="close-btn" onClick={closePopup}>X</button>
  
          {/* Conditional rendering based on isLogin state */}
          {isLogin ? (
            <div>
              <h2>Login</h2>
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
              <p>
                Don't have an account?{" "}
                <button onClick={toggleForm}>Register here</button>
              </p>
            </div>
          ) : (
            <div>
              <h2>Register</h2>
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button>
              </form>
              <p>
                Already have an account?{" "}
                <button onClick={toggleForm}>Login here</button>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  // Parent component where the popup is triggered
  const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    return (
      <div className="App">
        <button onClick={openPopup}>Open Popup</button>
  
        {/* Popup component */}
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    );
  };
  
  export default App;