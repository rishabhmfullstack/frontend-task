// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem("authenticated")
  );

  const handleLoginSuccess = () => {
    localStorage.setItem("authenticated", "true");
    setAuthenticated(true);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
