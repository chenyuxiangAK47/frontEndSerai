import React from "react";

function CollectionSection() {
  return (
    <section className="section feature-section feature-purple collection-section">
      <div className="collection-inner">
        <div className="collection-image-frame">
          <div className="collection-image-card">
            <img
              className="collection-image"
              src="https://images.pexels.com/photos/1166869/pexels-photo-1166869.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Orchid moodboard placeholder"
            />
          </div>
        </div>

        <div className="collection-note">
          <h2 className="collection-note-title">Orchid Rhythm</h2>
          <div className="collection-note-card">
            <div className="collection-note-input">
              <span className="collection-note-placeholder">
                I&apos;m inspired...
              </span>
            </div>
            <div className="collection-note-footer">
              <div className="collection-note-tools">
                <span className="collection-tool-dot" />
                <span className="collection-tool-icon" />
                <span className="collection-tool-icon" />
              </div>
              <button className="collection-note-button" type="button">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;

