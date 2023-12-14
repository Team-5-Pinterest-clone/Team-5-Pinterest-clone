import React, { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [board, setBoard] = useState("");
  const [category, setCategory] = useState("");

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
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>CreatePost</div>
      <div className="d-flex flex-row justify-content-center align-self-center">
        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <figure className="figure">
            <div>
              <label htmlFor="formFileLg" className="form-label">
                <p>Choose a file or drag and drop it here</p>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="bi bi-images"
                      style={{ fontSize: "50px" }}
                    ></i>
                  </div>
                </div>
              </label>

              <label htmlFor="formFileLg" className="">
                <i className="visually-hidden">Choose an Image</i>
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
          <form className="fixdirection mb-3" onSubmit={handleSubmit}>
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
              <p>Board</p>
              <input
                className="form-control"
                id="formGroupExampleInput"
                placeholder=" Choose a Board:"
                name="Board"
                type="text"
                onChange={(e) => setBoard(e.target.value)}
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
            <button type="submit" className="btn btn-primary">
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
