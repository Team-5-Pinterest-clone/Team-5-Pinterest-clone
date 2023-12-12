import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  console.log(inputs);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/users/register", inputs);
      // navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="register-container">
      <h1>Create an account !</h1>
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
      {err && <p className="register-error">{err}</p>}
      <button onClick={handleClick} className="register-button">
        Register
      </button>
    </div>
  );
};

export default Register;
