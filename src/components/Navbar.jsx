import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
        Ujjwal Bhaiya की Topper Factory, [अंग्रजी रटें नहीं, सीखें ।]
      </div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Zwiss Logo" className="logo-img" style={{height: '35px'}} />
          <span className="text-gradient" style={{marginLeft: '8px', fontSize: '1.6rem'}}>English</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
