import "./App.css";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import AllPosts from "./Components/AllPosts.jsx";
import Dummy from "./data/dummy.js";
import Register from "./register/Register.jsx";
import Login from "./login/Login.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import OnePost from "./Components/OnePost.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  const [data, setData] = useState(Dummy);
  return (
    <BrowserRouter>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/all-posts" element={<AllPosts data={data} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/OnePost" element={<OnePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
