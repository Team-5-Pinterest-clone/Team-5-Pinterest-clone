import "./App.css";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import AllPosts from "./Components/AllPosts.jsx";
import Register from "./register/Register.jsx";
import Login from "./login/Login.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import OnePost from "./Components/OnePost.jsx";
import Profile from "./Components/Profile.jsx";
import { DataProvider } from "./Context.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  // const [data, setData] = useState([]);
  // const [oneP,setOnep]=useState({})
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8800/api/users/getAllPosts")
  //     .then((result) => {
  //       console.log(result.data);
  //       setData(result.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  return (
    <BrowserRouter>
      <DataProvider>
        <div>
          <Nav />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="all-posts" element={<AllPosts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/OnePost" element={<OnePost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
