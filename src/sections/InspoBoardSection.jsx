import React from "react";

function InspoBoardSection() {
  return (
    <section className="section inspo-board-section">
      <div className="inspo-board-shell">
        <div className="inspo-board-content">
          <header className="inspo-board-header">
            <h2 className="inspo-board-title">Today&apos;s Inspos</h2>
          </header>

          <div className="inspo-board-grid">
            <article className="inspo-card inspo-card-image inspo-card-small">
              <img
                src="https://images.pexels.com/photos/1166869/pexels-photo-1166869.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Inspo 1"
              />
            </article>

            <article className="inspo-card inspo-card-poster inspo-card-tall">
              <img
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Poster inspo"
              />
            </article>

            <article className="inspo-card inspo-card-text inspo-card-text-stack">
              <p>TOUCH POEM FOR A GROUP OF PEOPLE</p>
              <p>COLLECTION</p>
              <p>A JOB IN FASHION</p>
            </article>

            <article className="inspo-card inspo-card-image inspo-card-small">
              <img
                src="https://images.pexels.com/photos/4040651/pexels-photo-4040651.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Inspo 2"
              />
            </article>

            <article className="inspo-card inspo-card-image inspo-card-medium">
              <img
                src="https://images.pexels.com/photos/7319087/pexels-photo-7319087.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Inspo 3"
              />
            </article>

            <article className="inspo-card inspo-card-tools">
              <div className="inspo-tools-row">
                <span className="inspo-tool-dot" />
                <span className="inspo-tool-square" />
                <span className="inspo-tool-square" />
                <span className="inspo-tool-line" />
              </div>
            </article>

            <article className="inspo-card inspo-card-image inspo-card-medium">
              <img
                src="https://images.pexels.com/photos/4219640/pexels-photo-4219640.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Inspo 4"
              />
            </article>

            <article className="inspo-card inspo-card-image inspo-card-small">
              <img
                src="https://images.pexels.com/photos/5700170/pexels-photo-5700170.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Inspo 5"
              />
            </article>

            <article className="inspo-card inspo-card-image inspo-card-small dark-card">
              <img
                src="https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Inspo 6"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InspoBoardSection;

