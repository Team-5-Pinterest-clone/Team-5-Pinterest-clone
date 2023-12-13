import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/register/Register.jsx";
import Login from "./login/Login.jsx";
import OnePost from "../src/onePost/OnePost.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onePost" element={<OnePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
