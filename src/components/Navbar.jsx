import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoImg from '../../resources/logo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="nav-announcement">
        <div className="announcement-title">Ujjwal Bhaiya की Topper Factory,</div>
        <div className="announcement-tagline">[अंग्रजी रटें नहीं, सीखें ।]</div>
      </div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={LogoImg} alt="Zwiss Logo" className="logo-img" />
          <span className="logo-text text-gradient">Zwiss Class</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
