import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import AllPosts from "./Components/AllPosts.jsx";
import Register from "./register/Register.jsx";
import Login from "./login/Login.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import OnePost from "./Components/OnePost.jsx";
import Profile from "./Components/Profile.jsx";
import UpdateProfile from "./Components/UpdateProfile.jsx";
import Search from "./Components/Search.jsx";
import { DataProvider } from "./Context.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SearchResult from "./Components/SearchResult.jsx";
function App() {
  const [results, setResults] = useState([]);

  return (
    <BrowserRouter>
      <DataProvider>
        <div>
          <Nav />
          <div className="Search-container">
            <Search setResults={setResults} />
            <SearchResult results={results} />
          </div>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="all-posts" element={<AllPosts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/OnePost" element={<OnePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
          {/* <Route path="/search" element={<Search setResults={setResults} />} /> */}
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
