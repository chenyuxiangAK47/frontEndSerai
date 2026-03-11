import React from "react";

function FeatureSection({ index, theme }) {
  const isPurple = theme === "purple";

  return (
    <section
      className={`section feature-section ${isPurple ? "feature-purple" : ""}`}
    >
      <div className="feature-inner">
        <div className="feature-copy">
          <p className="feature-kicker">Section {index}</p>
          <h2 className="feature-title">
            Feature Section {index} Placeholder
          </h2>
          <p className="feature-subtitle">
            Unified template for sections 2, 3, and 4. Replace copy, media, and
            visual details in the next phase without changing the scroll
            framework.
          </p>
        </div>
        <div className="feature-media-placeholder">
          <span>Media / Cards Placeholder</span>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

