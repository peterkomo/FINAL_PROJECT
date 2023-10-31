import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import "/home/mwangi/FINAL_PROJECT/client/src/components/sighnup.css";
import img1 from "/home/mwangi/FINAL_PROJECT/client/src/images/image.png"


const CreateAccount = () => {
    const navigate = useNavigate();

    const initialFormData = {
      name: '',
      email: '',
      password: '',
    };
  
    const [formData, setFormData] = useState(initialFormData);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://127.0.0.1:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          
          console.log('Signup successful!');
          setFormData(initialFormData); 
          navigate('/login'); 
        } else {
          
          console.error('Signup failed.');
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
    <div className="create-account">
      <div className="overlap-wrapper">
        <div className="overlap">
          
          <p className="text-wrapper">Already have an account? sign in</p>
          <div className="div">Let’s get started.</div>
          <div className="text-wrapper-2">Create an account</div>
          <div className="password">
          <input className="input" placeholder="email" type="email" />

            <div className="overlap-group">
              <div className="text-wrapper-3">Password</div>
              
            </div>
          </div>
          <div className="email">
            <input className="input" placeholder="email" type="email" />
            
          </div>
          <div className="name">
            
            <input className="input" placeholder="Name" type="text" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Create account</div>
            </div>
          </div>
          <img className="image" alt="Image" src={img1} />
          
          <p className="text-wrapper">Already have an account? login<NavLink to="/login">login</NavLink></p>
          <div className="div">Let’s get started.</div>
          <div className="text-wrapper-2">Create an account</div>
          <div className="password">

            <div className="overlap-group">
              <div className="text-wrapper-3">Password</div>
              <input className="input" placeholder="password" type="email" />
              
            </div>
          </div>
          <div className="email">
            <input className="input" placeholder="email" type="email" />
           
          </div>
          <div className="name">
            {/* <img className="img" alt="Line" src="line-1-2.svg" /> */}
            <input className="input" placeholder="Name" type="text" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-4">Create account</div>
            </div>
          </div>
          {/* <img className="image" alt="Image" src={img1} /> */}
          <div className="registration-image">
             <img className="unnamed" alt="Unnamed" src="https://lh3.googleusercontent.com/1fmzgGEWYdufxJ9AFbI3gO8GMROfyrYYo5uE8EzAKpYeMfid89ZBoWtagyjQ5gYSJexxnYxfTRP5zHd0UUtlsNtsNDCPcn_Lcty8DGAgXQ=s750" /> 
            {/* containerof the big image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
