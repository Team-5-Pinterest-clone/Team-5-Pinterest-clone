import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/register/Register.jsx";
import Login from "./login/Login.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
