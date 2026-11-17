function About() {
  return (
    <section className="about" id="about">
      <div className="about-top">
        <div className="section-label">
          <span>ABOUT SAM</span>
          <div></div>
          <span>02</span>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-image">
          <div className="image-overlay">
            <span>EST. 2026</span>
            <p>STRONG<br />TOGETHER</p>
          </div>
        </div>

        <div className="about-content">
          <p className="about-small">
            MORE THAN A GYM
          </p>

          <h2>
            A SPACE TO
            <br />
            <span>BE YOURSELF.</span>
          </h2>

          <p className="about-text">
            SAM Women's Fitness Center is created to give women
            a comfortable place to train, grow stronger and build
            confidence.
          </p>

          <p className="about-text">
            Whether your goal is fitness, strength, weight management
            or simply becoming more active, we're here to support
            your journey.
          </p>

          <div className="about-stats">
            <div>
              <strong>100%</strong>
              <span>WOMEN FOCUSED</span>
            </div>

            <div>
              <strong>01</strong>
              <span>FITNESS COMMUNITY</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>YOUR POTENTIAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;