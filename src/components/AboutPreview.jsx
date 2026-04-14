import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';
import UjjwalImg from '../../resources/ujjawl.jpeg';

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="preview-content glass-panel">
          <div className="preview-text">
            <h2>Meet <span className="text-gradient">Ujjwal Sir</span></h2>
            <p className="preview-desc">
              Zwiss English Classes helps students improve grammar, writing, and exam performance through structured learning and regular tests. With years of dedicated teaching experience in Hamirpur, Ujjwal Sir focuses on building a strong foundation in English so students can confidently score above 90% in their board exams.
            </p>
            <Link to="/about" className="btn btn-outline" style={{marginTop: '1.5rem'}}>Read More</Link>
          </div>
          <div className="preview-graphic">
             <div className="preview-circle" style={{ overflow: 'hidden', padding: 0, border: '4px solid var(--accent-primary)' }}>
               <img src={UjjwalImg} alt="Ujjwal Sir" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
