import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../login/login.css";
import "../login/login.css";

const Loginn = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear previous error on input change
    setErr(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Assuming login is a function that handles authentication
      await login(inputs);

      toast.success("Login successful!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Redirect to the "/all-posts" route upon successful login
      navigate("/all-posts");
    } catch (err) {
      setErr(err.response.data);

      toast.error("Invalid username or password!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleLogin}>
        <div className="form-outline mb-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="form2Example1"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example1">
            Username
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="form2Example31"
                defaultChecked
              />
              <label className="form-check-label " htmlFor="form2Example31">
                Remember me
              </label>
            </div>
          </div>

          <div className="col">
            <Link to="#!">Forgot password?</Link>
          </div>
        </div>

        {err && <div className="text-danger">{err}</div>}

        <button type="submit" className="btn btn-danger btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>Not a member? </p>
          <Link to="/register" className="btn btn-danger">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Loginn;
