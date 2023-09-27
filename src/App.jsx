import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Button/Login/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/Button/Register/Register";
import HomePage from "./Pages/HomePage/HomePage";
import Customer from "./Components/Button/Customer/Customer";
import EditProfile from "./Components/Button/EditProfile/Editprofile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
