import React, { useContext, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { DataContext } from "../Context.js";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../register/register.css";

export default function EditButton(props) {
  const { data } = useContext(DataContext);
  const userLoged = localStorage.getItem("user");
  const [userLog, setUserlogged] = useState(
    userLoged ? JSON.parse(userLoged) : null
  );
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

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:8800/api/users/updateProfile/${userLog.idUsers}`,
        inputs
      )
      .then((response) => {
        console.log(response); // Log the response if needed
        // navigate("/login");
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
        setErr(err.response.data); // Assuming setErr is properly defined
      });
  };

  const handleGoToProfile = () => {
    console.log("clicked");
    navigate("/profile");
  };

  const onChange = () => {};

  return (
    <div
      className="gradient-custom-2"
      style={{ backgroundColor: "#7e777a", opacity: "0.9" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row justify-content-center"
                style={{ backgroundColor: "", height: "200px" }}
              >
                <div
                  className=" mt-5 d-flex flex-column  justify-content-end"
                  style={{ width: "150px" }}
                >
                  <div>
                    <label
                      htmlFor="formFileLg"
                      className="image-container"
                      // onClick={handleImageClick}
                    >
                      <img
                        src={userLog.photo}
                        alt="Generic placeholder "
                        className="mt-4 mb-2 img-thumbnail"
                        style={{
                          width: "150px",
                          zIndex: "1",
                          borderRadius: "35px",
                        }}
                      />
                    </label>
                    <input
                      //onChange={handleImageChange}
                      style={{ display: "none" }}
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                  </div>
                  <h5 className="media-heading user_name px-2">
                    {/* {props.user.username} */}
                  </h5>
                </div>
              </div>
              <div
                className="p-2 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex  justify-content-center text-center ">
                  <div>
                    <p className="small text-muted mb-0">{userLog.username}</p>
                    <div className="mb-3">
                      <p className="lead fw-normal mb-1">About</p>
                      <div
                        className="p-2"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <p className="font-italic mb-1">{userLog.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-black p-0"></div>

              <div className="register-container">
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
                <br />
                <MDBBtn
                  outline
                  color="dark"
                  style={{ height: "36px", overflow: "visible" }}
                  onClick={(e) => {
                    handleClick(e);
                    handleGoToProfile();
                  }}
                  className="register-button"
                >
                  Edit profile
                </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
