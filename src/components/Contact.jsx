import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Reach out to Ujjwal Sir today or visit one of our branches in Maudaha Hamirpur.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-panel">
            <h3>Contact Details</h3>
            
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 96954 52323</p>
                <p>+91 90268 34532</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>ujjwalkabirchaurasiya@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-locations">
            <div className="location-card glass-panel">
              <span className="info-icon">📍</span>
              <div>
                <h4>Branch 1</h4>
                <p>In front of police station</p>
                <p>Maudaha, Hamirpur</p>
                <a href="https://maps.app.goo.gl/HnacR9WC1ApC1saX6?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: 'var(--accent-primary)', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}>Get Directions ↗</a>
              </div>
            </div>

            <div className="location-card glass-panel">
              <span className="info-icon">📍</span>
              <div>
                <h4>Branch 2</h4>
                <p>In front of old state bank, near EDORO SQUARE</p>
                <p>Maudaha, Hamirpur</p>
                <a href="https://maps.app.goo.gl/M7Tsp4gfzfzQgq1w9?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: 'var(--accent-primary)', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}>Get Directions ↗</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
