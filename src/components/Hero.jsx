import React from 'react';
import './Hero.css';
import HeroImg from '../../resources/20.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span> Next-Gen Learning
          </div>
          <h1 className="hero-title" style={{fontSize: '3.5rem', lineHeight: '1.2'}}>
            Find <span className="text-gradient">Expert Tutors</span> for Face-to-Face Learning
          </h1>
          <p className="hero-subtitle" style={{fontSize: '1rem', lineHeight: '1.6'}}>
            Looking for qualified offline tutors to provide in-person learning for your child? <strong>Zwiss English Classes</strong> connects students with experienced tutors who offer one-on-one guidance, ensuring a better understanding of concepts and strong academic performance.
          </p>


        </div>

        <div className="hero-visual">
          <div className="floating-card card-1 glass-panel">
            <div className="mockup-header">
              <span className="mockup-dot dot-r"></span>
              <span className="mockup-dot dot-y"></span>
              <span className="mockup-dot dot-g"></span>
            </div>
            <img src={HeroImg} alt="Face-to-Face Learning" className="mockup-img" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
