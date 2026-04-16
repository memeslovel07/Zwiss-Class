import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoImg from '../../resources/logo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="nav-announcement">
        <div className="announcement-title">Ujjwal Bhaiya की Topper Factory,</div>
        <div className="announcement-tagline">[अंग्रजी रटें नहीं, सीखें ।]</div>
      </div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={LogoImg} alt="Zwiss English classroom teaching students" className="logo-img" />
            <span className="logo-text text-gradient">Zwiss English Classes</span>
          </Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/courses" onClick={closeMenu}>Courses</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/syllabus" onClick={closeMenu}>Syllabus</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/reviews" onClick={closeMenu}>Reviews</Link></li>
             <li><Link to="/question-papers" onClick={closeMenu}>Question Papers</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
