import React from 'react';
import './Features.css';

const Features = () => {
  const featureData = [
    {
      icon: '👨‍🏫',
      title: 'Experienced & Verified Tutors',
      desc: 'Background-checked professionals with deep subject expertise. Every tutor completes a rigorous vetting process to ensure they can deliver high-quality, impactful education.'
    },
    {
      icon: '🏫',
      title: 'Face-to-Face Learning',
      desc: 'Personalized attention for superior understanding. We focus intimately on the student\'s specific weak points, building confidence and clarity in a highly engaging in-person environment.'
    },
    {
      icon: '🕒',
      title: 'Flexible Scheduling',
      desc: 'Choose the time and location that suits you. We accommodate your busy lifestyle by offering adaptable lesson plans that fit perfectly into your routine.'
    },
    {
      icon: '📖',
      title: 'Exam Preparation',
      desc: 'Expert coaching specifically tailored for CBSE, state boards, and more. Our comprehensive mock-tests and strategic study guides seamlessly pave the way to higher marks.'
    },
    {
      icon: '💡',
      title: 'Doubt-Solving Sessions',
      desc: 'Instant query resolution with interactive teaching. Students receive answers instantly and overcome their academic challenges without the hesitation common in crowded classrooms.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Our <span className="text-gradient">Offline Tutoring Services?</span></h2>
          <p className="section-subtitle">We bridge the gap between students and the best educators for guaranteed results.</p>
        </div>

        <div className="features-grid">
          {featureData.map((feature, index) => (
            <div className="feature-card glass-panel" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
