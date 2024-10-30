import React from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import "../pages/Support.css";
const Support = () => {
  return (
    <>
      <div className="support">
        <h1>Contact Us</h1>
        <Input label="Subject" />
        <div style={{ height: "200px" }}>
          <Input label="Message" />
        </div>
        <div style={{ width: "150px" }}>
          {" "}
          <Button title="Send" backgroundColor="#27374D" />
        </div>
      </div>
    </>
  );
};

export default Support;
