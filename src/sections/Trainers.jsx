function Trainers() {
  const trainers = [
    {
      number: "01",
      name: "YOUR TRAINER",
      role: "FITNESS TRAINER",
      image:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "02",
      name: "YOUR TRAINER",
      role: "PERSONAL TRAINER",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "03",
      name: "YOUR TRAINER",
      role: "FITNESS COACH",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <section className="trainers" id="trainers">
      <div className="section-label">
        <span>MEET THE TEAM</span>
        <div></div>
        <span>04</span>
      </div>

      <div className="trainers-heading">
        <div>
          <p>PEOPLE BEHIND YOUR PROGRESS.</p>

          <h2>
            TRAIN
            <br />
            <span>TOGETHER.</span>
          </h2>
        </div>

        <p>
          The right guidance can make every workout more meaningful.
          Meet the people who help you move forward.
        </p>
      </div>

      <div className="trainer-grid">
        {trainers.map((trainer) => (
          <article className="trainer-card" key={trainer.number}>
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>

            <div className="trainer-info">
              <span>{trainer.number}</span>

              <div>
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>

              <button>↗</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Trainers;    