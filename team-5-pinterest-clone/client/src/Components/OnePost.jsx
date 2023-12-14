import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
//import IconButton from "@material-ui/core/IconButton";
import { MDBCardText } from "mdb-react-ui-kit";
function OnePost(props) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 card "
      style={{ maxHeight: "700px" }}
    >
      <div className="d-flex flex-row justify-content-center align-self-center card-body posts ">
        <figure
          className="figure "
          style={{ maxWidth: "400px", maxHeight: "600px" }}
        >
          <img
            src={props.one.photo}
            className="figure-img img-fluid rounded posts"
            style={{ maxWidth: "400px", maxHeight: "600px" }}
            alt=""
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
              <ShareIcon />
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
                        <a href="#">Like</a> - <a href="#">Share</a>
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
                  <div class="form-floating">
                    <textarea
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Add a detailed description"
                      name="Description"
                      type="text"
                      required
                    />
                  </div>
                  <span className="input-group-text ">
                    <label htmlFor="formFileLg" className="bi bi-image ">
                      <i className="visually-hidden">Choose an Image</i>
                      <input
                        //onChange={handleImageChange}
                        style={{ display: "none" }}
                        className="form-control form-control-lg px-2 "
                        id="formFileLg"
                        type="file"
                      />
                    </label>
                  </span>

                  <span>
                    <button className="btn btn-danger px-2 " type="button">
                      ✅
                    </button>
                  </span>
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
