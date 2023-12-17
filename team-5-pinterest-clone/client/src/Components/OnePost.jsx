import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBCardText } from "mdb-react-ui-kit";
import { RWebShare } from "react-web-share";
import Avatar from "@mui/material/Avatar";

function OnePost(props) {
  const [comment, setComment] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [commentText, setCommentText] = useState("");
  const navigate = useNavigate();
  const userLoged = localStorage.getItem("user");
  const [userPhoto, setUserPhoto] = useState([]);

  const [userLog, setUserlogged] = useState(
    userLoged ? JSON.parse(userLoged) : null
  );
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8800/api/users/getOneComment/${props.one.idpostes}`
      )
      .then((result) => {
        const commentPromises = result.data.map((comment) => {
          return axios.get(
            `http://localhost:8800/api/users/getOneUserid/${comment.users_idUsers}`
          );
        });

        Promise.all(commentPromises)
          .then((responses) => {
            const updatedComments = result.data.map((comment, i) => {
              return {
                ...comment,
                userInfo: responses[i].data[0],
              };
            });
            setComment(updatedComments);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.one.idpostes, refresh]);
  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/users/getOneUserid/${userLog.idUsers}`)
      .then((result) => {
        console.log(result.data);
        setUserPhoto(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userLog.idUsers]);

  //comment add not work quey fix pls
  const handleCommentAdd = () => {
    if (commentText.trim() !== "") {
      axios
        .post("http://localhost:8800/api/comments/addComment", {
          body: commentText,
          idpostes: props.one.idpostes,
          users_idUsers: userLog.idUsers,
        })
        .then((res) => {
          setCommentText("");
          setRefresh(!refresh);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLike = (id, likes) => {
    axios
      .put(`http://localhost:8800/api/users/updateCommentLike/${id}`, {
        like: likes + 1,
      })
      .then((res) => setRefresh(!refresh))
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
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
              <a className="media-left" href="#!">
                <span className="d-flex">
                  <Avatar src={props.user.photo} />

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
            <RWebShare
              data={{
                text: `Check out this post by  + ${props.one.title}`,
                title: `Post by  + ${props.user.username}`,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button type="button" className="btn p-3">
                <ShareIcon />
              </button>
            </RWebShare>
            <button
              type="button "
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => props.set(false)}
            ></button>
          </div>
          <div className="card-body">
            <div className="p-0" style={{ backgroundColor: "#f8f9fa" }}>
              <h6>{props.one.title}</h6>
              <small>{props.one.createdAt}</small>
              <p>{props.one.description}</p>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <p>{comment.length} Comments</p>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="toast-body">
                    <div
                      className="media"
                      style={{ maxHeight: "150px", overflowY: "auto" }}
                    >
                      {comment.map((comment, i) => {
                        return (
                          <div className="media-body" key={i}>
                            <div
                              className="p-2"
                              style={{ backgroundColor: "#f8f9fa" }}
                            >
                              <MDBCardText className="font-italic mb-1">
                                <div className="media d-flex">
                                  <a className="media-left" href="#!">
                                    <span className="d-flex">
                                      <img
                                        src={comment.userInfo.photo}
                                        alt="User Avatar"
                                        className="img-circle"
                                        width="30px"
                                        height="30px"
                                      />
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
                                    {comment.comment_like}{" "}
                                    <a
                                      href="#!"
                                      onClick={() =>
                                        handleLike(
                                          comment.idcomment,
                                          comment.comment_like
                                        )
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
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 card-body">
            <div className="media d-flex">
              <figure className="figure px-2">
                {userPhoto.map((el, i) => (
                  <Avatar
                    key={i}
                    src={userLog.photo}
                    alt="User Avatar"
                    sx={{ width: 30, height: 30 }}
                    onClick={handleClick}
                  />
                ))}
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
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
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
                            onClick={handleCommentAdd}
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
