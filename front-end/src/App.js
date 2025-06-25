// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Inventory from "./components/inventory";
import SideBar from "./components/sidebar";

const App = () => {
  return (
    <Router>
      <div className="app-container" style={{ display: "flex" }}>
        <SideBar /> {/* Show sidebar on all pages */}
        <div className="main-content" style={{ flex: 1, padding: "20px", marginLeft: "300px" }}>
          <h1>User Inventory System</h1>
          <Routes>
            {/* <Route path="/" element={<div>Welcome! Select a section.</div>} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
