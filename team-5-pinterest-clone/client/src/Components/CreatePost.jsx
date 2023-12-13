import React, { useState } from "react";
import axios from "axios";
function CreatePost() {
  const [ProductName, setProductName] = useState("");
  const [ProductsDescription, SetProductsDescription] = useState("");
  const [productsPrix, setProductsPrix] = useState(0);
  const [productsColler, setproductsColler] = useState("");
  const [productstock, setproductstock] = useState(0);
  const [category, setcategory] = useState("");
  const [productsImage, setproductsImage] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  axios
    .post("http://localhost:3000/api/dashboard/createProduct", {
      ProductName: ProductName,
      ProductsDescription: ProductsDescription,
      productstock: productstock,
      productsPrix: productsPrix,
      productsColler: productsColler,
      productsImage: productsImage,
      category: category,
      users_idusers: 37,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setproductsImage(file);
  };

  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "amineguezmir");

    await axios
      .post("https://api.cloudinary.com/v1_1/dj6zjioi8/upload", form)
      .then((result) => {
        setUrl(result.data.secure_url);
      });
  };

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
              </label>
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
                value={file}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <p>
                we recommend using high quality .jpg files
                <br></br> less than 20MB or .mp4 files less than 200MB.
              </p>
            </div>
          </figure>
        </div>
        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <form className="fixdirection mb-3">
            <label className="form-label">
              <p>Title</p>
              <input
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Add a title"
                type="text"
                name="Title"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                requiredTitle
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
                onChange={(e) => {
                  SetProductsDescription(e.target.value);
                }}
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
                onChange={(e) => {
                  setproductstock(e.target.value);
                }}
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
                onChange={(e) => {
                  setProductsPrix(e.target.value);
                }}
                required
              />
            </label>

            {/* <label className="form-label">
              <input
                className="form-control"
                id="formGroupExampleInput"
                placeholder="  Color:"
                type="text"
                name="productsColler"
                onChange={(e) => {
                  setproductsColler(e.target.value);
                }}
                required
              />
            </label> */}
            {/* 
            <label className="form-label">
              <input
                className="form-control"
                id="formGroupExampleInput"
                placeholder=" Image Upload:"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label> */}

            <label className="form-label">
              <p>Category</p>
              <input
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Category:"
                type="text"
                name="category"
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
                required
              />
            </label>

            <button className="btn btn-primary" onClick={() => CreatePost()}>
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
