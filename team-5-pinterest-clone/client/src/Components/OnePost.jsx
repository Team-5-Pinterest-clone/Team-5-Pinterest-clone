import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import IconButton from "@material-ui/core/IconButton";
import { MDBCardText } from "mdb-react-ui-kit";
import { RWebShare } from "react-web-share"; // Import the sharing component

function OnePost(props) {
  const [comment, setComment] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8800/api/users/getOneComment/${props.one.idpostes}`)
  //     .then((result) => {
  //       result.data.map((comments,i)=>{
  //         axios.get(`http://localhost:8800/api/users/getOneUserid/${comments.users_idUsers}`)
  //         .then((res)=>{
  //           setComment([{...comments,userInfo:res.data[0]}])
  //         }).catch((err)=>console.error(err))
  //       })
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  useEffect(() => {
    // Fetch comments for a specific post ID from the backend API
    axios
      .get(
        `http://localhost:8800/api/users/getOneComment/${props.one.idpostes}`
      )
      .then((result) => {
        // Create an array of promises to fetch user info for each comment
        const commentPromises = result.data.map((comment) => {
          // For each comment, fetch user info based on the user ID associated with the comment
          return axios.get(
            `http://localhost:8800/api/users/getOneUserid/${comment.users_idUsers}`
          );
        });

        // Resolve all promises to get user info for each comment
        Promise.all(commentPromises)
          .then((responses) => {
            // Combine each comment with its corresponding user info
            const updatedComments = result.data.map((comment, i) => {
              return {
                ...comment,
                userInfo: responses[i].data[0], // Attaching user info to the comment
              };
            });

            // Update state with comments including user info
            setComment(updatedComments);
          })
          .catch((err) => console.error(err)); // Handle any errors in resolving promises
      })
      .catch((err) => {
        console.error(err); // Handle errors in fetching comments from the backend API
      });
  }, [props.one.idpostes, refresh]); // Trigger this effect whenever props.one.idpostes changes

  const handleLike = (id, likes) => {
    axios
      .put(`http://localhost:8800/api/users/updateCommentLike/${id}`, {
        like: likes + 1,
      })
      .then((res) => setRefresh(!refresh))
      .catch((err) => console.log(err));
  };
  const handleClick = () => {
    console.log("clicked");
    navigate("/profile");
  };
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
                  <h5
                    className="media-heading user_name px-2"
                    onClick={handleClick}
                  >
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
                  url: "your-post-url",
                  title: "Post by " + props.user.username,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                {" "}
                <ShareIcon />
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
              {comment.map((comment, i) => {
                return (
                  <div className="media-body ">
                    <div className="p-2" style={{ backgroundColor: "#f8f9fa" }}>
                      <MDBCardText className="font-italic mb-1">
                        <div className="media d-flex">
                          <a className="media-left" href="#">
                            <span className="d-flex">
                              <img
                                src={comment.userInfo.photo}
                                alt="User Avatar"
                                className="img-circle"
                                width="30px"
                                height="30px"
                              />{" "}
                              <h4 className="media-heading user_name px-2">
                                {comment.userInfo.username}
                              </h4>
                            </span>
                            <p className="pull-right">
                              <small>{comment.createdAt}</small>
                            </p>
                          </a>
                        </div>
                        {comment.body}
                        <p>
                          <small>
                            {comment.like}{" "}
                            <a
                              href="#"
                              onClick={() =>
                                handleLike(comment.idcomment, comment.like)
                              }
                            >
                              Like
                            </a>
                          </small>
                        </p>
                      </MDBCardText>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-3 card-body">
            <p>{comment.length} Comments</p>
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
