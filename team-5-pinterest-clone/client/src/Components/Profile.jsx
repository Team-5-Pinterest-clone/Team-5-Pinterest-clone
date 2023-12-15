import React, { useContext } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { DataContext } from "../Context.js";

export default function EditButton(props) {
  const { data } = useContext(DataContext);

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
                    src="https://th.bing.com/th/id/OIP.BVbNgsb0pic_Ju-OKXrU3QAAAA?w=270&h=270&rs=1&pid=ImgDetMain"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{
                      width: "150px",
                      zIndex: "1",
                      borderRadius: "35px",
                    }}
                  />
                  <h5 className="media-heading user_name px-2">
                    {/* {props.user.username} */}
                  </h5>
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
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
                    <p className="mb-1 h5">253</p>
                    <p className="small text-muted mb-0">Photos</p>
                  </div>
                </div>
              </div>
              <div className="text-black p-0">
                <div className="mb-3">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-2" style={{ backgroundColor: "#f8f9fa" }}>
                    <p className="font-italic mb-1">Web Developer</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="lead fw-normal mb-0">
                    <button type="button" className="btn p-3">
                      {" "}
                      Create Pin
                    </button>
                  </p>
                  <p className="mb-0">
                    <button type="button" className="btn p-3">
                      {" "}
                      Show all
                    </button>
                  </p>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
