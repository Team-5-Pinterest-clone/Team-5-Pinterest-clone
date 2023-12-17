import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../src/authContext.js";
import Loginn from "../src/login/Loginn.jsx";
import "./App.css";
import AllPosts from "./Components/AllPosts.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import Home from "./Components/Home.jsx";
import Nav from "./Components/Nav.jsx";
import OnePost from "./Components/OnePost.jsx";
import Profile from "./Components/Profile.jsx";
import UpdateProfile from "./Components/UpdateProfile.jsx";
import { DataProvider } from "./Context.js";
import Register from "./register/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <DataProvider>
          <Nav />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/all-posts" element={<AllPosts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Loginn />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/OnePost" element={<OnePost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
          </Routes>
        </DataProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
