import React from "react";
import { useNavigate } from "react-router-dom";

function FinalCTASection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <section className="section final-cta-section">
      <div className="final-cta-main">
        <h2 className="final-cta-title">
          <span className="final-cta-title-dark">Stop scrolling, </span>
          <span className="final-cta-title-accent">seize the day</span>
        </h2>
        <p className="final-cta-subtitle">
          With Serai, enjoy seamless collaboration with shared assets, feedback
          review, and billing.
        </p>
        <button className="final-cta-button" type="button" onClick={handleClick}>
          Start Exploring
        </button>
      </div>

      <footer className="final-cta-footer">
        <div className="final-cta-footer-inner">
          <div className="final-cta-footer-brand">
            <div className="final-cta-logo-mark" />
            <span>Serai AI</span>
          </div>
          <div className="final-cta-footer-copy">
            <p>Copyright © 2026</p>
            <p>All rights reserved.</p>
          </div>
          <div className="final-cta-footer-icons">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </footer>
    </section>
  );
}

export default FinalCTASection;


