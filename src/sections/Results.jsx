function Results() {
  const stats = [
    {
      number: "500+",
      title: "WORKOUTS",
      text: "Training sessions completed",
    },
    {
      number: "100+",
      title: "MEMBERS",
      text: "Women building stronger lives",
    },
    {
      number: "95%",
      title: "CONSISTENCY",
      text: "Members staying on track",
    },
    {
      number: "01",
      title: "COMMUNITY",
      text: "One supportive fitness space",
    },
  ];

  return (
    <section className="results" id="results">
      <div className="section-label">
        <span>THE RESULTS</span>
        <div></div>
        <span>05</span>
      </div>

      <div className="results-main">
        <div className="results-heading">
          <p>SMALL STEPS. BIG CHANGES.</p>

          <h2>
            YOUR
            <br />
            <span>PROGRESS</span>
            <br />
            MATTERS.
          </h2>
        </div>

        <div className="results-copy">
          <p>
            Fitness isn't about being perfect. It's about showing up,
            staying consistent and becoming stronger every day.
          </p>

          <a href="#contact" className="results-link">
            START YOUR JOURNEY <span>↗</span>
          </a>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <span className="stat-number">{stat.number}</span>

            <div>
              <h3>{stat.title}</h3>
              <p>{stat.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quote-card">
        <span className="quote-mark">“</span>

        <p>
          Become the strongest version of yourself —
          one workout at a time.
        </p>

        <span className="quote-small">SAM WOMEN'S FITNESS CENTER</span>
      </div>
    </section>
  );
}

export default Results;