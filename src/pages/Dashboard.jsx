// src/pages/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("currentUser");
    navigate("/"); // Redirect to home
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Dashboard</h2>
      <p>
        Welcome, <strong>{user?.name || "Guest"}</strong>!
      </p>
      <button className="btn btn-danger mt-3" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Dashboard;
