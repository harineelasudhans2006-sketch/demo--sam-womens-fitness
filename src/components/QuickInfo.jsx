function QuickInfo() {
  const info = [
    {
      number: "01",
      title: "WOMEN ONLY",
      text: "A comfortable and supportive fitness space designed exclusively for women.",
    },
    {
      number: "02",
      title: "EXPERT TRAINERS",
      text: "Professional guidance to help you train safely and reach your fitness goals.",
    },
    {
      number: "03",
      title: "PERSONAL CARE",
      text: "Training plans designed around your individual fitness journey and progress.",
    },
    {
      number: "04",
      title: "RESULT FOCUSED",
      text: "Stay consistent, build strength and become a healthier version of yourself.",
    },
  ];

  return (
    <section className="quick-info">
      <div className="section-label">
        <span>WHY SAM</span>
        <div></div>
        <span>04</span>
      </div>

      <div className="info-grid">
        {info.map((item) => (
          <div className="info-card" key={item.number}>
            <span className="card-number">{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            <div className="card-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickInfo;