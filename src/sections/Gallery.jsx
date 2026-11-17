function Gallery() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
      title: "TRAIN HARD",
      className: "gallery-large",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=85",
      title: "BUILD POWER",
      className: "gallery-small",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85",
      title: "FEEL STRONG",
      className: "gallery-small",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
      title: "STAY CONSISTENT",
      className: "gallery-wide",
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="section-label">
        <span>OUR GALLERY</span>
        <div></div>
        <span>06</span>
      </div>

      <div className="gallery-heading">
        <div>
          <p>MOVE. TRAIN. REPEAT.</p>

          <h2>
            LIFE AT
            <br />
            <span>SAM.</span>
          </h2>
        </div>

        <p>
          A glimpse into the energy, movement and community
          that make every session at SAM special.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className={`gallery-item ${item.className}`} key={index}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <span>{item.title}</span>
              <span>↗</span>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-cta">
        <span>FOLLOW THE JOURNEY</span>

        <a href="#" className="instagram-btn">
          INSTAGRAM ↗
        </a>
      </div>
    </section>
  );
}

export default Gallery;