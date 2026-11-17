import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="small-title">
          SAM WOMEN'S FITNESS CENTER
        </p>

        <h1>
          STRONGER.
          <br />
          <span>CONFIDENT.</span>
          <br />
          UNSTOPPABLE.
        </h1>

        <p className="hero-text">
          Build your strength, confidence and healthy lifestyle
          in a space designed especially for women.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
            START YOUR JOURNEY
          </a>

          <a href="#programs" className="outline-btn">
            EXPLORE PROGRAMS
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-slider">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Women fitness training"
              className={index === currentImage ? "hero-slide active" : "hero-slide"}
            />
          ))}
        </div>

        <div className="hero-counter">
          <span>0{currentImage + 1}</span>

          <div className="counter-line">
            <div
              className="counter-progress"
              key={currentImage}
            />
          </div>

          <span>04</span>
        </div>
      </div>

      <div className="hero-decoration">
        SAM
      </div>
    </section>
  );
}

export default Hero;