import React from 'react';
import './About.css';
import UjjwalImg from '../../resources/ujjawl.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About <span className="text-gradient">Ujjwal Sir</span></h2>
          <p className="section-subtitle">Dedicated to transforming English education in Maudaha, Hamirpur.</p>
        </div>

        <div className="about-content glass-panel">
          <div className="about-text">
            <p className="lead">
              At Zwiss English Classes, we believe that mastering English opens the door to better academic performance and future opportunities.
            </p>
            <p>
              Led by <strong>Ujjwal Sir</strong>, who holds a Master of Arts (M.A.) in English and a Bachelor of Science (B.Sc.) with PCM, our institute combines strong academic expertise with practical teaching experience. He is also trained with D.El.Ed and is currently pursuing B.Ed, ensuring structured and effective teaching methods.
            </p>
            <p>
              We offer result-oriented English coaching for students of classes 9th to 12th, with a clear focus on grammar, literature, and answer writing skills. Our approach is designed not just to complete the syllabus, but to build deep understanding and confident communication.
            </p>
            <p>
              Starting with just 4 students in 2021, Zwiss English Classes has grown to mentor <strong>400+ students every year</strong> across its branches in Hamirpur. Our goal is to continue this journey by reaching 600+ students, while maintaining quality, discipline, and personal attention.
            </p>
          </div>
          <div className="about-graphic">
            <div className="graphic-circle" style={{ overflow: 'hidden', border: '6px solid var(--accent-primary)' }}>
              <img src={UjjwalImg} alt="Ujjwal Sir" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
