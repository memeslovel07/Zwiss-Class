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
              At Zwiss English Classes, we believe that mastering English empowers students to unlock countless opportunities in their academic and professional journeys.
            </p>
            <p>
              Led by the experienced educator <strong>Ujjwal Sir</strong>, we offer highly specialized, results-driven English tuition for students from grades 9th to 12th. With a focus on comprehensive grammar, literature exploration, and practical answer writing techniques, our curriculum is designed not just to help students pass exams, but to help them truly understand and speak the language with confidence.
            </p>
            <p>
              Having already mentored over <strong>400+ enrolled students</strong> across our two premium branches in Hamirpur, our mission is to reach out and deliver top-tier education to over 600 students this academic year. 
            </p>
            <div style={{marginTop: '2rem'}}>
              <h3 style={{marginBottom: '1rem', color: 'var(--accent-primary)'}}>Our Core Focus:</h3>
              <ul style={{listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-primary)'}}>
                <li>✅ Easy Grammar</li>
                <li>✅ Writing Practice</li>
                <li>✅ Weekly Tests</li>
                <li>✅ Board Exam Focus</li>
              </ul>
            </div>
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
