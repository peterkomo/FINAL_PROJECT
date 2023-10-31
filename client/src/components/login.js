import React from "react";
import "./login.css";
import img2 from "/home/mwangi/FINAL_PROJECT/client/src/images/image.png"

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="div">
        <div className="overlap">
          <p className="text-wrapper">Do not have an account, register here</p>
          <div className="text-wrapper-2">Let’s get started.</div>
          <div className="text-wrapper-3">Login to your account</div>
          <div className="password">
            <div className="overlap-group">
              <div className="text-wrapper-4">Password</div>
               
               
            </div>
          </div>
          <div className="email">
            <input className="input" placeholder="email" type="email" />
            
          </div>
          <div className="create-account">
            <div className="div-wrapper">
              <div className="text-wrapper-5">Login</div>
            </div>
          </div>
          <img className="image" alt="Image" src={img2} /> 
          {/* moringa logo */}
        </div>
        <div className="login-image">
           <img className="unnamed" src="https://lh3.googleusercontent.com/1fmzgGEWYdufxJ9AFbI3gO8GMROfyrYYo5uE8EzAKpYeMfid89ZBoWtagyjQ5gYSJexxnYxfTRP5zHd0UUtlsNtsNDCPcn_Lcty8DGAgXQ=s750"alt="Unnamed"  />  
        {/* background image
         */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
