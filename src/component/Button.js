import React from "react";

const Button = ({ backgroundColor, title, color, onClick }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || "#007bff", // Default color
    color: color || "#ffffff",
    border: "none",
    borderRadius: "15px",
    padding: "15px 20px",
    cursor: "pointer",
    fontSize: "14px",
    width: "100%",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
