// import React, { useState } from "react";

// function OnePost(props) {
// // function OnePost(props) {
function OnePost() {
  //   const [isPopupOpen, setPopupOpen] = useState(false);

  //   const handlePostClick = () => {
  //     setPopupOpen(true);
  //   };

  //   const closePopup = () => {
  //     setPopupOpen(false);
  //   };
  //   return (
  //     <div className="postCard" onClick={handlePostClick}>
  //       <div className="postContainer">
  //         <img src={props.data.photo} alt="" className="postimg" />
  //         <div className="userOverlay">
  //           <img
  //             src={props.users[props.data.userIndex].photo}
  //             alt=""
  //             className="userimg"
  //           />
  //           <h2>{props.users[props.data.userIndex].username}</h2>
  //         </div>
  //       </div>
  //     </div>
  //   );

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
            No comments yet! Add one to start the conversation.
            <div>
              <figure className="figure">
                <img
                  src="https://i.pinimg.com/originals/20/a8/f2/20a8f25a0e7a3b1b11813e5c27c64382.jpg"
                  className="figure-img img-fluid rounded"
                  width="50"
                  height="50"
                  alt=""
                />
              </figure>

              <span>comment exampel</span>
            </div>
            <div>
              <figure className="figure">
                <img
                  src="https://i.pinimg.com/originals/20/a8/f2/20a8f25a0e7a3b1b11813e5c27c64382.jpg"
                  className="figure-img img-fluid rounded"
                  width="50"
                  height="50"
                  alt=""
                />
              </figure>

              <span>comment exampel</span>
            </div>
            <div>
              <figure className="figure">
                <img
                  src="https://i.pinimg.com/originals/20/a8/f2/20a8f25a0e7a3b1b11813e5c27c64382.jpg"
                  className="figure-img img-fluid rounded"
                  width="50"
                  height="50"
                  alt=""
                />
              </figure>

              <span>comment exampel</span>
            </div>
          </div>
          <div className="mb-3">
            <p> 8 Comments</p>
            <figure className="figure">
              <img
                src="https://i.pinimg.com/originals/20/a8/f2/20a8f25a0e7a3b1b11813e5c27c64382.jpg"
                className="figure-img img-fluid rounded"
                width="50"
                height="50"
                alt=""
              />
            </figure>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <textarea
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Add a comment"
                type="text"
                name="Title"
                requiredTitle
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnePost;
