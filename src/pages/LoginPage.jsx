import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="full-screen center-content">
      <div className="login-card">
        <h1 className="login-title">Login Placeholder</h1>
        <p className="login-subtitle">
          This is a placeholder login page. You can plug in your real auth flow later.
        </p>
        <Link to="/" className="ghost-link">
          ← Back to landing
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;

