//
// src/component/register.js
//
import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import './register.css';
// import { toast } from 'react-hot-toast';

// This component handles user registration
const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
    
  // This function handles the registration process
  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/register',
        {
            firstname,
            lastname,
            email,
            // password
        }, { withCredentials: true} // in case cookies are sent with the request ...
    );
    // toast.success('Registration successful!');
    console.log(response.data);

    } catch (error) {
      console.error('Registration failed:', error);
      // toast.error(error.response?.data || 'Something went wrong during registration');
    }
  };
  // State to hold form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstname':
        setFirstname(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      // case 'password':
      //   setPassword(value);
      //   break;
      // case 'confirmPassword':
      //   setConfirmPassword(value);
      //   break;
      default:
        break;
    }
  };
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="firstname" placeholder="Firstname" value={firstname} onChange={handleChange} required />
        <input type="text" name="lastname" placeholder="Lastname" value={lastname} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
        {/* <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /> */}
        {/* <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required /> */}
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;