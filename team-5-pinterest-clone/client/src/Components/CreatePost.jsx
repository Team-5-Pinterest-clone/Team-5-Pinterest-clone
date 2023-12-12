import React from "react";

function CreatePost() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>CreatePost</div>
      <div className="d-flex flex-row justify-content-center align-self-center">
        <figure className="figure">
          <div>
            <label htmlFor="formFileLg" className="form-label">
              Large file input example
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </div>
        </figure>

        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        ></div>
      </div>
    </div>
  );
}

export default CreatePost;
