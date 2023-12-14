import React from "react";

function OnePost(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 card ">
      <div className="d-flex flex-row justify-content-center align-self-center card-body posts">
        <figure className="figure ">
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
          style={{ maxWidth: "400px", maxHeight: "600px" }}
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
                  <h4 className="media-heading user_name">{props.user.username}</h4>
                </span>
              </a>
            </div>
            <strong className="me-auto"></strong>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss=""
              aria-label=""
            >
              <i class="bi bi-save">save</i>
            </button>{" "}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={()=>props.set(false)}
            ></button>
          </div>
          <div className="card-body">
            <h5>Title</h5>
            <small>{props.one.createdAt}</small>
            <h5>Description</h5>
            <p>
              {props.one.description}
            </p>{" "}
            <h5>Comments</h5>
          </div>
          <div className="toast-body">
            <div className="media">
              <p className="pull-right">
                <small>5 days ago</small>
              </p>
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
                    <h4 className="media-heading user_name">Baltej Singh</h4>
                  </span>
                </a>
              </div>
              <div className="media-body ">
                Wow! this is really great.
                <p>
                  <small>
                    <a href="#">Like</a> - <a href="#">Share</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 card-body">
            <p>8 Comments</p>
            <div className="media d-flex">
              <figure className="figure">
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
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      control-id="ControlID-17"
                    ></textarea>
                  </div>
                  <span className="input-group-text">
                    <label htmlFor="formFileLg" className="bi bi-image">
                      <i className="visually-hidden">Choose an Image</i>
                      <input
                        //onChange={handleImageChange}
                        style={{ display: "none" }}
                        className="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                      />
                    </label>
                  </span>

                  <span>
                    <button type="button">done</button>
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
