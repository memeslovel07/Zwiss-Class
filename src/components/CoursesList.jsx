import React from 'react';
import './CoursesList.css';

const CoursesList = () => {
  return (
    <div className="courses-page-wrapper">
      {/* 1. Header / Intro */}
      <section className="courses-header">
        <div className="container">
          <h1 className="section-title">Our <span className="text-gradient">Programs</span></h1>
          <p className="section-subtitle">Structured, goal-oriented English coaching designed to guarantee academic excellence.</p>
        </div>
      </section>

      {/* 2. Course Categories */}
      <section className="programs-section">
        <div className="container">
          <div className="programs-grid">
            <div className="program-card glass-panel">
              <div className="program-icon">📘</div>
              <h3>Foundation English</h3>
              <span className="badge">Class 9 & 10</span>
              <p>Build a rock-solid foundation for future success. We focus heavily on core grammar mechanics, vocabulary building, and early board exam orientation.</p>
              <ul className="program-features">
                <li>✔️ Basic to Advanced Grammar</li>
                <li>✔️ Literature & Comprehension</li>
                <li>✔️ Step-by-step Writing Skills</li>
              </ul>
            </div>

            <div className="program-card glass-panel highlight">
              <div className="program-icon">🏆</div>
              <h3>Advanced Board Prep</h3>
              <span className="badge">Class 11 & 12</span>
              <p>Our flagship intensive coaching specifically tailored for supreme board exam results. We analyze past papers, master literature, and perfect essay drafting.</p>
              <ul className="program-features">
                <li>✔️ Intensive Literature Mastery</li>
                <li>✔️ UP Board / CBSE Focused</li>
                <li>✔️ Answer Writing Strategies</li>
              </ul>
            </div>

            <div className="program-card glass-panel">
              <div className="program-icon">🗣️</div>
              <h3>Spoken & Personality</h3>
              <span className="badge">All Ages</span>
              <p>Conquer the fear of public speaking. This practical module focuses on conversational fluency, interview etiquette, and vocabulary enrichment.</p>
              <ul className="program-features">
                <li>✔️ Fluency & Pronunciation</li>
                <li>✔️ Confidence Building</li>
                <li>✔️ Group Discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curriculum / Roadmap */}
      <section className="roadmap-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The <span className="text-gradient">Zwiss Edge</span></h2>
            <p className="section-subtitle">What you get when you become a part of our offline tuition center.</p>
          </div>
          <div className="roadmap-grid">
            <div className="roadmap-item">
              <div className="roadmap-number">01</div>
              <h4>Premium Study Material</h4>
              <p>Complete printed notes, formula sheets, and chapter-wise summaries provided for every student.</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-number">02</div>
              <h4>Weekly Doubt Sessions</h4>
              <p>Exclusive face-to-face time with Ujjwal Sir to resolve personal weaknesses before they become permanent.</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-number">03</div>
              <h4>Monthly Mock Exams</h4>
              <p>Strict, board-pattern examination simulations to destroy exam anxiety and track measurable progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timings and Batches */}
      <section className="batches-section">
        <div className="container">
          <div className="batches-container glass-panel">
            <div className="batches-content">
              <h2>Flexible <span className="text-gradient">Batch Timings</span></h2>
              <p>We respect your school timings. Choose a slot that completely aligns with your daily schedule.</p>
              
              <div className="slots-grid">
                <div className="slot-card">
                  <span className="slot-icon">🌅</span>
                  <h4>Morning Batches</h4>
                  <ul className="batch-list">
                    <li><span>6:00 AM - 7:00 AM</span> <strong>10th</strong></li>
                    <li><span>7:00 AM - 8:00 AM</span> <strong>12th</strong></li>
                  </ul>
                </div>
                <div className="slot-card">
                  <span className="slot-icon">☀️</span>
                  <h4>Afternoon Batches</h4>
                  <ul className="batch-list">
                    <li><span>1:00 PM - 2:00 PM</span> <strong>10th</strong></li>
                    <li><span>2:00 PM - 3:00 PM</span> <strong>12th</strong></li>
                    <li><span>3:00 PM - 4:00 PM</span> <strong>10th</strong></li>
                    <li><span>4:00 PM - 5:00 PM</span> <strong>9th</strong></li>
                  </ul>
                </div>
                <div className="slot-card">
                  <span className="slot-icon">🌇</span>
                  <h4>Evening Batches</h4>
                  <ul className="batch-list">
                    <li><span>5:00 PM - 6:00 PM</span> <strong>10th CBSE</strong></li>
                    <li><span>6:00 PM - 7:00 PM</span> <strong>12th</strong></li>
                    <li><span>7:00 PM - 8:00 PM</span> <strong>12th</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesList;
