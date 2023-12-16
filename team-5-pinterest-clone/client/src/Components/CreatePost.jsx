import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [board, setBoard] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "amineguezmir");

    try {
      const result = await axios.post(
        "https://api.cloudinary.com/v1_1/dj6zjioi8/upload",
        formData
      );

      setUrl(result.data.secure_url);

      const otherFormData = {
        title,
        description,
        link,
        board,
        category,
      };

      const response = await axios.post(
        "http://localhost:8800/api/users/addPost",
        otherFormData
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(title);

  const handleClick = () => {
    if (title && description && link && board && category && image) {
      console.log("clicked");
      navigate("/all-posts");
    } else {
      alert("Please fill in all required fields and upload an image.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 card">
      <div className="d-flex flex-row justify-content-center align-self-center">
        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <figure className="figure">
            <div className="card-body">
              <label htmlFor="formFileLg" className="form-label">
                <p>Choose a file or drag and drop it here</p>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></div>
                </div>
              </label>

              <label htmlFor="formFileLg" className="">
                <i className="visually-hidden"></i>
                <div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill=""
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div class="text">
                    <span>Click to upload image</span>
                  </div>
                </div>

                <input
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </label>
              <p>
                We recommend using high-quality .jpg files less than 20MB or
                .mp4 files less than 200MB.
              </p>
              <div>
                {image && (
                  <img
                    src={image}
                    alt="Uploaded"
                    style={{ width: "200px", height: "200px" }}
                  />
                )}
              </div>
            </div>
          </figure>
        </div>

        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <form className="fixdirection mb-3 card-body" onSubmit={handleSubmit}>
            <label className="form-label">
              <p>Title</p>
              <input
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Add a title"
                type="text"
                name="Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>

            <label className="form-label">
              <p>Description</p>
              <textarea
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Add a detailed description"
                name="Description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>

            <label className="form-label">
              <p>Link</p>
              <input
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Add a link:"
                name="Add a link"
                type="text"
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </label>
            <label className="form-label">
              <p>Category</p>
              <input
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Category:"
                type="text"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="btn btn-danger "
              // onClick={handleClick}
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
