import React, { useContext, useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { DataContext } from "../Context.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function EditButton(props) {
  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  const userLoged = localStorage.getItem("user");
  const [userLog, setUserlogged] = useState(
    userLoged ? JSON.parse(userLoged) : null
  );
  const [usersPosts, setUP] = useState([]);
  console.log("clicked", userLog.username);
  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/users/getAllPost/${userLog.idUsers}`)
      .then((result) => {
        console.log(result.data);
        setUP(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleClickedit = () => {
    navigate("/updateProfile");
  };
  const handleCreatepin = () => {
    navigate("/createPost");
  };

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "" }}>
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
                  <MDBCardImage
                    src={userLog && userLog.photo}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{
                      width: "150px",
                      zIndex: "1",
                      borderRadius: "35px",
                    }}
                  />
                  <h5 className="media-heading user_name px-2 text-dark">
                    {userLog && userLog.username}
                  </h5>
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
                    onClick={handleClickedit}
                  >
                    Edit profile
                  </MDBBtn>
                </div>
              </div>
              <div
                className="p-2 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex  justify-content-center text-center ">
                  <div>
                    <p className="mb-1 h5">{usersPosts.length}</p>
                    <p className="small text-muted mb-0">Photos</p>
                  </div>
                </div>
              </div>
              <div className="text-black p-0">
                <div className="mb-3">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-2" style={{ backgroundColor: "#f8f9fa" }}>
                    <p className="font-italic mb-1">{userLog && userLog.bio}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="lead fw-normal mb-0">
                    <button
                      type="button"
                      className="btn p-3"
                      onClick={handleCreatepin}
                    >
                      {" "}
                      Create Pin
                    </button>
                  </p>
                  <p className="mb-0">
                    <button type="button" className="btn p-3">
                      {/* onclick show all false show 2 posts true show l map */}{" "}
                      Show all
                    </button>
                  </p>
                </div>

                <MDBRow className="mb-2">
                  {usersPosts.map((post, i) => {
                    return (
                      <>
                        <MDBCol className="mb-2">
                          <MDBCardImage
                            src={post.photo}
                            alt="image 1"
                            className="w-100 rounded-3"
                          />
                        </MDBCol>
                      </>
                    );
                  })}
                </MDBRow>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
