import React, { useState, useEffect } from 'react';
import './TopRightAlert.css'
function TopRightAlert({ message, backgroundColor = 'green',  duration = 2000 }) {

    
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {


    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [duration]);

  return (
    showAlert && (
      <div
        className="login-success-alert"
        style={{ backgroundColor }}
      >
        {message}
      </div>
    )
  );
}

export default TopRightAlert;