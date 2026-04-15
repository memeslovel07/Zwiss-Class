import React, { useState, useEffect } from 'react';
import './Toppers.css';

import Img2023 from '../../resources/2023.jpeg';
import Img2024 from '../../resources/2024.jpeg';
import Img2025 from '../../resources/2025.jpeg';

const Toppers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { year: '2023', img: Img2023, alt: '2023 Topper' },
    { year: '2024', img: Img2024, alt: '2024 Topper' },
    { year: '2025', img: Img2025, alt: '2025 Topper' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="toppers-section">
      <div className="section-header container">
        <h2 className="section-title">Our <span className="text-gradient">Toppers</span></h2>
        <p className="section-subtitle">Consistent highest scores in English board exams year after year. Meet our proud achievers!</p>
      </div>
      
      <div className="toppers-slider-container">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`toppers-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="topper-year">{slide.year} Highest Scorer</div>
            <img src={slide.img} alt={slide.alt} className="topper-full-img" />
          </div>
        ))}
        <div className="toppers-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`toppers-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
