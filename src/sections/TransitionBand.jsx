import React, { useEffect, useRef, useState } from "react";

function TransitionBand() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 - 1

  useEffect(() => {
    function handleScroll() {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      const start = viewportHeight * 0.1;
      const end = viewportHeight * 0.9;
      const centerY = rect.top + rect.height / 2;

      const rawProgress = (centerY - start) / (end - start);
      const clamped = Math.min(1, Math.max(0, 1 - rawProgress));

      setProgress(clamped);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const percentage = Math.round(progress * 100);
  const windowSize = 0.1; // 10% 滑动窗口
  const clampedEnd = Math.min(1, Math.max(0, progress));
  const start = Math.max(0, clampedEnd - windowSize);

  return (
    <section ref={containerRef} className="section transition-band">
      <div className="transition-inner">
        <div className="transition-text-wrapper">
          <span className="transition-text-base">
            Trend signals → Brand DNA → GTM-ready direction.
          </span>
          <span
            className="transition-text-highlight"
            style={{
              "--reveal-start": start,
              "--reveal-end": clampedEnd,
            }}
          >
            Trend signals → Brand DNA → GTM-ready direction.
          </span>
        </div>
        <div className="transition-meta">
          <span className="transition-label">SCROLL PROGRESS</span>
          <span className="transition-percentage">{percentage}%</span>
        </div>
      </div>
    </section>
  );
}

export default TransitionBand;

