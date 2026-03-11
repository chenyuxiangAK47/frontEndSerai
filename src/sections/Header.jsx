import React from "react";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-header-left">
          <div className="site-logo-mark" />
          <span className="site-logo-text">Serai AI</span>
        </div>
        <nav className="site-nav">
          <button className="site-nav-link is-active" type="button">
            Company
          </button>
          <button className="site-nav-link" type="button">
            Features
          </button>
          <button className="site-nav-link" type="button">
            Explore
          </button>
        </nav>
        <div className="site-header-right">
          <button className="site-cta-button" type="button">
            Try Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

