// src/pages/HomePage.js
import React, { useState } from "react";
import SignUpModal from "../components/SignUpModal";
import SignInModal from "../components/SignInModal";

const HomePage = ({ onLoginSuccess }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Auth App</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => setShowSignUp(true)}
      >
        Sign Up
      </button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => setShowSignIn(true)}
      >
        Sign In
      </button>

      <SignUpModal show={showSignUp} onClose={() => setShowSignUp(false)} />
      <SignInModal
        show={showSignIn}
        onClose={() => setShowSignIn(false)}
        onLoginSuccess={onLoginSuccess}
      />
    </div>
  );
};

export default HomePage;
