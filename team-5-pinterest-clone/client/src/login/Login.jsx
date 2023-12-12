import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from "bcryptjs";

function Login() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8800/api/users/login")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username);

    if (user) {
      const hashedPasswordFromDatabase = user.password;
      const passwordMatch = bcrypt.compareSync(
        password,
        hashedPasswordFromDatabase
      );
    }
    if (user) {
      console.log("User exists!");
      toast.dark("Login successful ! Redirecting you to the home page ! ", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "#1E1E1E",
          color: "#FFFFFF",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
        },
      });
      setTimeout(() => {
        window.location.href = "/register";
      }, 2000);
    } else {
      console.log("User not found.");
      toast.error("Invalid username or password!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "#1E1E1E",
          color: "#FFFFFF",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Login to your account !</h1>
      <label htmlFor="username-input">Your Username:</label>
      <input
        type="username"
        id="username-input"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className="login-input"
      />

      <label htmlFor="password-input">Your Password:</label>
      <input
        type="password"
        id="password-input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="login-input"
      />

      <button type="submit" className="login-button">
        Login
      </button>
      <p className="create-account">Don't have an account?</p>
      <Link to="/register" className="create-account-link">
        Create Account
      </Link>
      <ToastContainer />
    </form>
  );
}
export default Login;
