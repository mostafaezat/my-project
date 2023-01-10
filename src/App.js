import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componet/nav/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./componet/Home";
import Login from "./componet/Login";
import Register from "./componet/Register";
import Category from "./componet/Category";
import CreatCategory from "./componet/CreatCategory";
import Update from "./componet/Update";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/CreatCategory" element={<CreatCategory />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
