function Programs() {
  const programs = [
    {
      number: "01",
      title: "STRENGTH",
      subtitle: "BUILD YOUR POWER",
      text: "Build strength, improve endurance and become more powerful with structured training.",
    },
    {
      number: "02",
      title: "WEIGHT LOSS",
      subtitle: "FEEL LIGHTER",
      text: "Train consistently with effective workouts designed to support your fitness goals.",
    },
    {
      number: "03",
      title: "PERSONAL TRAINING",
      subtitle: "TRAIN YOUR WAY",
      text: "Get focused guidance and a training approach built around your individual needs.",
    },
    {
      number: "04",
      title: "FITNESS",
      subtitle: "MOVE BETTER",
      text: "Improve your everyday fitness, mobility and confidence through regular training.",
    },
  ];

  return (
    <section className="programs" id="programs">
      <div className="section-label">
        <span>OUR PROGRAMS</span>
        <div></div>
        <span>03</span>
      </div>

      <div className="programs-heading">
        <div>
          <p>TRAIN WITH PURPOSE.</p>

          <h2>
            FIND YOUR
            <br />
            <span>STRONG.</span>
          </h2>
        </div>

        <p className="program-intro">
          Choose the training style that fits your goals.
          Start where you are and build from there.
        </p>
      </div>

      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.number}>
            <div className="program-top">
              <span>{program.number}</span>
              <span className="program-arrow">↗</span>
            </div>

            <div className="program-content">
              <p>{program.subtitle}</p>

              <h3>{program.title}</h3>

              <div className="program-line"></div>

              <span className="program-text">{program.text}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Programs;