import React from "react";

function OnePost() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>OnePost</div>

      <div className="d-flex flex-row justify-content-center align-self-center">
        <figure className="figure">
          <img
            src="https://i.pinimg.com/originals/20/a8/f2/20a8f25a0e7a3b1b11813e5c27c64382.jpg"
            className="figure-img img-fluid rounded"
            width="400"
            height="600"
            alt=""
          />
        </figure>

        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Comments</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            <div className="media">
              <p className="pull-right">
                <small>5 days ago</small>
              </p>
              <a className="media-left" href="#">
                <img
                  src="http://lorempixel.com/40/40/people/1/"
                  alt="User Avatar"
                  className="img-circle"
                />
              </a>
              <div className="media-body">
                <h4 className="media-heading user_name">Baltej Singh</h4>
                Wow! this is really great.
                <p>
                  <small>
                    <a href="">Like</a> - <a href="">Share</a>
                  </small>
                </p>
              </div>
            </div>
            <div className="media">
              <p className="pull-right">
                <small>5 days ago</small>
              </p>
              <a className="media-left" href="#">
                <img
                  src="http://lorempixel.com/40/40/people/2/"
                  alt="User Avatar"
                  className="img-circle"
                />
              </a>
              <div className="media-body">
                <h4 className="media-heading user_name">Baltej Singh</h4>
                Wow! this is really great.
                <p>
                  <small>
                    <a href="">Like</a> - <a href="">Share</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p>8 Comments</p>
            <div className="media">
              <figure className="figure">
                <img
                  src="https://i.pinimg.com/originals/20/a8/f2/20a8f25a0e7a3b1b11813e5c27c64382.jpg"
                  className="figure-img img-fluid rounded"
                  width="50"
                  height="50"
                  alt=""
                />
              </figure>
              <label htmlFor="formGroupExampleInput" className="form-label">
                <div className="input-group">
                  <textarea
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Add a comment"
                    type="text"
                    name="Title"
                    requiredTitle
                  />
                  <span className="input-group-text">
                    <i className="bi bi-image"></i>
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
