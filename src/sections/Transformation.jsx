import { useState } from "react";

function Transformation() {
  const [position, setPosition] = useState(50);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(
      0,
      Math.min(100, (x / rect.width) * 100)
    );

    setPosition(percentage);
  };

  return (
    <section className="transformation" id="transformations">
      <div className="section-label">
        <span>REAL TRANSFORMATIONS</span>
        <div></div>
        <span>05</span>
      </div>

      <div className="transformation-heading">
        <div>
          <p>CONSISTENCY CREATES CHANGE.</p>

          <h2>
            BEFORE
            <br />
            <span>& AFTER.</span>
          </h2>
        </div>

        <p>
          Every journey starts somewhere. Stay consistent,
          keep moving and let your progress speak for itself.
        </p>
      </div>

      <div
        className="comparison"
        onMouseMove={handleMove}
      >
        {/* AFTER IMAGE */}
        <div className="after-image">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85"
            alt="After transformation"
          />

          <span className="after-label">AFTER</span>
        </div>

        {/* BEFORE IMAGE */}
        <div
          className="before-image"
          style={{ width: `${position}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=85"
            alt="Before transformation"
          />

          <span className="before-label">BEFORE</span>
        </div>

        {/* SLIDER */}
        <div
          className="comparison-line"
          style={{ left: `${position}%` }}
        >
          <div className="comparison-handle">
            ↔
          </div>
        </div>
      </div>

      <div className="transformation-bottom">
        <div>
          <strong>12 WEEKS</strong>
          <span>CONSISTENT TRAINING</span>
        </div>

        <div>
          <strong>ONE GOAL</strong>
          <span>STRONGER EVERY DAY</span>
        </div>

        <a href="#contact">
          START YOUR JOURNEY ↗
        </a>
      </div>
    </section>
  );
}

export default Transformation;