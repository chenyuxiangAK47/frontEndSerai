import React from "react";
import { Link } from "react-router-dom";

function AuthPage() {
  return (
    <main className="auth-page">
      <div className="auth-page-shell">
        <header className="auth-header">
          <div className="auth-header-brand">
            <div className="auth-logo-mark" />
            <span className="auth-brand-text">Serai AI</span>
          </div>

          <nav className="auth-header-nav">
            <a href="#company">Company</a>
            <a href="#features">Features</a>
            <a href="#explore">Explore</a>
          </nav>

          <button className="auth-header-cta" type="button">
            Try Now
          </button>
        </header>

        <section className="auth-main">
          <div className="auth-left">
            <div className="auth-left-inner">
              <div className="auth-left-brand-block">
                <div className="auth-logo-mark auth-logo-large" />
                <p className="auth-left-brand-label">Create your account</p>
              </div>

              <h1 className="auth-hero-title">
                <span className="auth-hero-accent">
                  Smarter creative decisions,
                </span>
                <br />
                <span className="auth-hero-muted">powered by AI.</span>
              </h1>
            </div>
          </div>

          <div className="auth-right">
            <div className="auth-form-card">
              <p className="auth-helper-text">
                Please fill in the details to get started!
              </p>

              <button className="auth-oauth-button" type="button">
                <span className="auth-oauth-icon auth-google-icon">G</span>
                <span>Google</span>
              </button>

              <button className="auth-oauth-button" type="button">
                <span className="auth-oauth-icon auth-microsoft-icon">■</span>
                <span>Microsoft</span>
              </button>

              <div className="auth-divider">
                <span className="auth-divider-line" />
                <span className="auth-divider-text">OR</span>
                <span className="auth-divider-line" />
              </div>

              <form className="auth-form">
                <label className="auth-field">
                  <span className="auth-field-label">Username</span>
                  <input
                    className="auth-input"
                    type="text"
                    autoComplete="username"
                  />
                </label>

                <label className="auth-field">
                  <span className="auth-field-label">E-Mail</span>
                  <input
                    className="auth-input"
                    type="email"
                    autoComplete="email"
                  />
                </label>

                <label className="auth-field">
                  <span className="auth-field-label">Password</span>
                  <input
                    className="auth-input"
                    type="password"
                    autoComplete="new-password"
                  />
                </label>

                <button className="auth-submit-button" type="submit">
                  Start Exploring
                </button>
              </form>

              <p className="auth-switch-text">
                Already have an account?{" "}
                <Link to="/login" className="auth-switch-link">
                  Sign in
                </Link>
              </p>

              <div className="auth-legal-links">
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthPage;

