import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

//import IconButton from "@material-ui/core/IconButton";
import { MDBCardText } from "mdb-react-ui-kit";
import { RWebShare } from "react-web-share"; // Import the sharing component

function OnePost(props) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 card "
      style={{ maxHeight: "700px" }}
    >
      <div className="d-flex flex-row justify-content-center align-self-center card-body posts ">
        <figure
          className="figure"
          style={{ maxWidth: "400px", maxHeight: "500px" }}
        >
          <img
            src={props.one.photo}
            className="figure-img img-fluid rounded posts"
            alt=""
            style={{ width: "400px", height: "650px" }}
          />
        </figure>

        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ width: "500px" }}
        >
          <div className="toast-header ">
            <div className="media d-flex">
              <a className="media-left" href="#">
                <span className="d-flex">
                  <img
                    src={props.user.photo}
                    alt="User Avatar"
                    className="img-circle"
                    width="30px"
                    height="30px"
                  />{" "}
                  <h5 className="media-heading user_name px-2">
                    {props.user.username}
                  </h5>
                </span>
              </a>
            </div>
            <strong className="me-auto"></strong>
            <button
              type="button "
              className="btn btn-danger p-3"
              data-bs-dismiss=""
              aria-label=""
            >
              <FavoriteIcon />
            </button>{" "}
            <button type="button" className="btn p-3">
              <RWebShare
                data={{
                  text: "Check out this post by " + props.user.username,
                  url: "your-post-url", // Replace with the actual URL of your post
                  title: "Post by " + props.user.username,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button type="button" className="btn p-3">
                  <ShareIcon />
                </button>
              </RWebShare>
            </button>
            <button
              type="button "
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => props.set(false)}
            ></button>
          </div>
          <div className="card-body">
            <h5>Title</h5>
            <small>{props.one.createdAt}</small>
            <h5>Description</h5>
            <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
              <MDBCardText className="font-italic ">
                {props.one.description}
              </MDBCardText>
            </div>
          </div>
          <div className="toast-body">
            <h5>Comments</h5>
            <div className="media">
              <div className="media-body ">
                <div className="p-2" style={{ backgroundColor: "#f8f9fa" }}>
                  <MDBCardText className="font-italic mb-1">
                    <div className="media d-flex">
                      <a className="media-left" href="#">
                        <span className="d-flex">
                          <img
                            src="https://th.bing.com/th/id/OIP.BVbNgsb0pic_Ju-OKXrU3QAAAA?w=270&h=270&rs=1&pid=ImgDetMain"
                            alt="User Avatar"
                            className="img-circle"
                            width="30px"
                            height="30px"
                          />{" "}
                          <h4 className="media-heading user_name px-2">
                            Baltej Singh
                          </h4>
                        </span>
                        <p className="pull-right">
                          <small>5 days ago</small>
                        </p>
                      </a>
                    </div>
                    Wow! this is really great.
                    <p>
                      <small>
                        <a href="#">Like</a>
                      </small>
                    </p>
                  </MDBCardText>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 card-body">
            <p>8 Comments</p>
            <div className="media d-flex">
              <figure className="figure px-2">
                <img
                  src="https://th.bing.com/th/id/OIP.BVbNgsb0pic_Ju-OKXrU3QAAAA?w=270&h=270&rs=1&pid=ImgDetMain"
                  className="figure-img img-fluid rounded"
                  width="30px"
                  alt=""
                />
              </figure>

              <label htmlFor="formGroupExampleInput" className="form-label">
                <div className="input-group">
                  <div className="form-floating">
                    <Box
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <TextField
                        label="comment"
                        id="fullWidth"
                        placeholder="Add comment"
                      />

                      <span
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-danger ">
                          <label htmlFor="formFileLg" className="bi bi-image ">
                            <input
                              style={{ display: "none" }}
                              className="form-control form-control-lg px-2"
                              id="formFileLg"
                              type="file"
                            />
                          </label>
                        </button>
                        <span
                          style={{
                            paddingLeft: "4px",
                          }}
                        >
                          <button
                            className="btn btn-danger"
                            type="button"
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <br />
                            <i className="bi bi-send"></i> <br />
                            <br />
                          </button>
                        </span>
                      </span>
                    </Box>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnePost;
