import React from "react";
import "./login.css";

const CreateAccount = () => {
  return (
    <div className="create-account">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="white-rounded" alt="White rounded" src="white-rounded-rectangle.svg" />
          <p className="text-wrapper">Already have an account? sign in</p>
          <div className="div">Let’s get started.</div>
          <div className="text-wrapper-2">Create an account</div>
          <div className="password">
            <div className="overlap-group">
              <div className="text-wrapper-3">Password</div>
              <img className="line" alt="Line" src="line-3.svg" />
            </div>
          </div>
          <div className="email">
            <input className="input" placeholder="email" type="email" />
            <img className="img" alt="Line" src="line-2.svg" />
          </div>
          <div className="name">
            <img className="img" alt="Line" src="line-1.svg" />
            <input className="input" placeholder="Name" type="text" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Create account</div>
            </div>
          </div>
          <div className="group">
            <img className="coding-bulb-logo" alt="Coding bulb logo" src="coding-bulb-logo-4x-1.png" />
          </div>
          <img className="image" alt="Image" src="image-2.png" />
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;