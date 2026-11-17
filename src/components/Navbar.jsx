import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        SAM<span>FIT</span>
      </a>

      {/* Desktop Menu */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
        <a href="#trainers">Trainers</a>
        <a href="#transformations">Transformations</a>
        <a href="#results">Results</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="join-btn">
        JOIN NOW
      </a>

      {/* Mobile Menu Button */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#programs" onClick={closeMenu}>
          Programs
        </a>

        <a href="#trainers" onClick={closeMenu}>
          Trainers
        </a>

        <a href="#transformations" onClick={closeMenu}>
          Transformations
        </a>

        <a href="#results" onClick={closeMenu}>
          Results
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="#contact" className="mobile-join" onClick={closeMenu}>
          JOIN NOW ↗
        </a>
      </div>
    </nav>
  );
}

export default Navbar;