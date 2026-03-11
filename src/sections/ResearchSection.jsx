import React from "react";

const results = [
  {
    id: 1,
    title: "Practicing Restraint to Build an Impactful Look",
    desc: "By reducing decorative elements and limiting color and silhouette variations, a single focal point gains greater visual power and impact.",
    image:
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "The Art of Restraint: Why Minimalism Became the New Language",
    desc: "In streetwear, restraint manifests through reduced logos and graphics, allowing proportion, structure, and fabric to communicate identity and attitude.",
    image:
      "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Fashion Creativity Must Be Restrained",
    desc: "Creative limitation—whether through material constraints, sustainability boundaries, or conceptual rules—becomes a catalyst for sharper ideas.",
    image:
      "https://images.pexels.com/photos/7691082/pexels-photo-7691082.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Minimalism, Luxury and Restraint",
    desc: "True luxury emerges from deliberate absence and material refinement rather than visual accumulation.",
    image:
      "https://images.pexels.com/photos/4040651/pexels-photo-4040651.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Corset — Fashion as Physical Restraint",
    desc: "The corset stands as a historical symbol of physical restriction, demonstrating how fashion has shaped bodies to reflect social ideals and power.",
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function ResearchSection() {
  return (
    <section className="section research-section">
      <div className="research-shell">
        <aside className="research-mini-sidebar">
          <div className="research-mini-brand">
            <div className="research-logo-mark" />
            <span className="research-mini-brand-text">Serai AI</span>
          </div>

          <button className="research-mini-toggle" type="button">
            ›
          </button>
        </aside>

        <div className="research-main">
          <div className="research-theme-panel">
            <h2 className="research-title">Orchid Rhythm</h2>

            <div className="research-theme-layout">
              <div className="research-main-image-card">
                <img
                  src="https://images.pexels.com/photos/1166869/pexels-photo-1166869.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Orchid inspiration board"
                />
              </div>

              <div className="research-copy-column">
                <p className="research-description">
                  I&apos;m inspired by how diverse shapes and colors come
                  together in a harmonious whole. Its elegance emerges from the
                  tension between <span>richness and restraint</span>. From this
                  visual dialogue, <span>I can imagine an entire collection.</span>
                </p>

                <div className="research-thumb-row">
                  <div className="research-thumb-card">
                    <img
                      src="https://images.pexels.com/photos/4219640/pexels-photo-4219640.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Sketch 1"
                    />
                  </div>
                  <div className="research-thumb-card">
                    <img
                      src="https://images.pexels.com/photos/5700170/pexels-photo-5700170.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Sketch 2"
                    />
                  </div>
                  <div className="research-thumb-card">
                    <img
                      src="https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Sketch 3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="research-tool-row">
              <span className="research-tool-dot" />
              <span className="research-tool-square" />
              <span className="research-tool-pen" />
              <span className="research-tool-mic" />
            </div>
          </div>

          <div className="research-search-panel">
            <div className="research-search-bar">
              <span className="research-search-icon">⌕</span>
              <span className="research-search-text">restraint</span>
            </div>

            <div className="research-result-list">
              {results.map((item) => (
                <article className="research-result-card" key={item.id}>
                  <div className="research-result-thumb">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="research-result-body">
                    <h3 className="research-result-title">{item.title}</h3>
                    <p className="research-result-desc">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;

