import React from "react";

function HeroSection() {
  return (
    <section className="section hero-section">
      <div className="hero-content hero-content-light">
        <div className="hero-title-block">
          <h1 className="hero-title-primary">Smarter creative decisions,</h1>
          <h1 className="hero-title-secondary">powered by AI.</h1>
        </div>
        <div className="hero-media">
          <div className="hero-media-frame">
            <img
              className="hero-media-asset"
              src="https://images.pexels.com/photos/6311571/pexels-photo-6311571.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Runway show placeholder"
            />
            <div className="hero-media-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

