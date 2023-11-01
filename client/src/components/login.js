import React, { useState } from 'react';
import "./login.css";
import { NavLink, useNavigate } from 'react-router-dom'
import img2 from "/home/mwangi/FINAL_PROJECT/client/src/images/image.png"

const LoginPage = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request with formData.email and formData.password
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful, navigate to the CreateProfile page
        console.log('Login successful!');
        navigate('/create-profile'); // Redirect to the CreateProfile page
      } else {
        // Handle login failure, show error messages, etc.
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="login-page">
      <div className="div">
        <div className="overlap">
          <p className="text-wrapper"><NavLink to="/">Do not have an account, register here</NavLink></p>
          <div className="text-wrapper-2">Let’s get started.</div>
          <div className="text-wrapper-3">Login to your account</div>
          <div className="password">
            <div className="overlap-group">
              <div className="text-wrapper-4">Password</div>
               
              <input
               type="password"
               name="password"
               id="password"
               placeholder="Password"
               value={formData.password}
               onChange={handleChange} 
              
            />
            </div>
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
             />
            
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