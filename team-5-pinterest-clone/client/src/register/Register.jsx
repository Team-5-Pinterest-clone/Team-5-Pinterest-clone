import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "../register/register.css";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (inputs.username && inputs.password && inputs.email) {
      try {
        const response = await axios.post(
          "http://localhost:8800/api/users/register",
          inputs
        );
        navigate("/login"); // Redirect to the login page after successful registration
      } catch (err) {
        setErr(err.response.data);
      }
    } else {
      // Display an error message or handle incomplete information case
      console.error("Please fill in all the required fields.");
    }
  };

  const onChange = () => {};

  return (
    <div className="register-container mt-5">
      <h1>Create an account!</h1>
      <label htmlFor="username-input">Your Username:</label>
      <input
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleChange}
        className="register-input"
      />
      <label htmlFor="email-input">Your Email:</label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        className="register-input"
      />
      <label htmlFor="password-input">Your Password:</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        className="register-input"
      />
      <div className="remember-me">
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <ReCAPTCHA
        sitekey="6LdBVi8pAAAAAGTk834uzz-txgGjcKaCixBKyIMJ"
        onChange={onChange}
      />
      {err && <p className="register-error">{err}</p>}

      <button onClick={handleClick} className="register-button">
        Register
      </button>
    </div>
  );
};

export default Register;
