import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const phoneNumber = "919695452323";

  const getWhatsappLink = (className) => {
    const message = encodeURIComponent(`Hello! I am interested in enrolling for Class ${className} English tuition.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section id="courses" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-gradient">Fee Structure</span></h2>
          <p className="section-subtitle">Affordable and quality English tuition by Ujjwal Sir to help you excel in your academics.</p>
        </div>

        <div className="pricing-grid">
          {/* Class 9 */}
          <div className="pricing-card glass-panel">
            <h3 className="course-name">Class 9</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">300</span>
              <span className="duration">/month</span>
            </div>
            <ul className="course-features">
              <li>✔️ Grammar Fundamentals</li>
              <li>✔️ Reading Comprehension</li>
              <li>✔️ Basic Writing Skills</li>
              <li>✔️ Regular Tests</li>
            </ul>
            <a href={getWhatsappLink("9")} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100" style={{display: 'inline-block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box'}}>Enroll Now</a>
          </div>

          {/* Class 10 */}
          <div className="pricing-card glass-panel popular">
            <div className="popular-badge">Board Prep</div>
            <h3 className="course-name">Class 10</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">300</span>
              <span className="duration">/month</span>
            </div>
            <ul className="course-features">
              <li>✔️ Complete Board Syllabus</li>
              <li>✔️ Literature Line-by-Line</li>
              <li>✔️ Previous Year Questions</li>
              <li>✔️ Dedicated Doubt Solving</li>
            </ul>
            <a href={getWhatsappLink("10")} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100" style={{display: 'inline-block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box'}}>Enroll Now</a>
          </div>

          {/* Class 11 */}
          <div className="pricing-card glass-panel">
            <h3 className="course-name">Class 11</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">350</span>
              <span className="duration">/month</span>
            </div>
            <ul className="course-features">
              <li>✔️ Advanced Grammar Rules</li>
              <li>✔️ Literature Core Concepts</li>
              <li>✔️ Language Fluency</li>
              <li>✔️ Vocabulary Building</li>
            </ul>
            <a href={getWhatsappLink("11")} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100" style={{display: 'inline-block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box'}}>Enroll Now</a>
          </div>

          {/* Class 12 */}
          <div className="pricing-card glass-panel popular">
            <div className="popular-badge">Most Enrolled</div>
            <h3 className="course-name">Class 12</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">350</span>
              <span className="duration">/month</span>
            </div>
            <ul className="course-features">
              <li>✔️ Ultimate Board Strategy</li>
              <li>✔️ Answer Writing Practice</li>
              <li>✔️ Exhaustive Literature Study</li>
              <li>✔️ Full Length Mock Exams</li>
            </ul>
            <a href={getWhatsappLink("12")} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100" style={{display: 'inline-block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box'}}>Enroll Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
