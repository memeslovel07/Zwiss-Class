import React from 'react';
import './FollowUs.css';

const FollowUs = () => {
  return (
    <section className="follow-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Follow <span className="text-gradient">Us</span></h2>
          <p className="section-subtitle">Stay connected on our social media platforms for the latest updates, tips, and class updates!</p>
        </div>
        
        <div className="social-links-grid">
          <a href="#" className="social-card facebook glass-panel" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">📘</div>
            <h3>Facebook</h3>
            <p>Join our community</p>
          </a>
          
          <a href="#" className="social-card instagram glass-panel" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">📸</div>
            <h3>Instagram</h3>
            <p>Follow our journey</p>
          </a>
          
          <a href="#" className="social-card youtube glass-panel" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">▶️</div>
            <h3>YouTube</h3>
            <p>Watch educational videos</p>
          </a>

          <a href="#" className="social-card telegram glass-panel" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">✈️</div>
            <h3>Telegram</h3>
            <p>Get study materials</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
