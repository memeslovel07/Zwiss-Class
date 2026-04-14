import React, { useRef } from 'react';
import './Scorers2026.css';
import ProfilePic from '../../resources/pp.jpeg';

const scorers = [
  { id: 1, name: 'Rahul Sharma', class: '12th', roll: '20260101', photo: ProfilePic },
  { id: 2, name: 'Priya Verma', class: '12th', roll: '20260124', photo: ProfilePic },
  { id: 3, name: 'Aman Patel', class: '10th', roll: '20260345', photo: ProfilePic },
  { id: 4, name: 'Neha Gupta', class: '11th', roll: '20260112', photo: ProfilePic },
  { id: 5, name: 'Vikash Singh', class: '12th', roll: '20260408', photo: ProfilePic },
  { id: 6, name: 'Anjali Tiwari', class: '10th', roll: '20260566', photo: ProfilePic },
  { id: 7, name: 'Saurabh Kumar', class: '12th', roll: '20260177', photo: ProfilePic },
  { id: 8, name: 'Megha Yadav', class: '11th', roll: '20260299', photo: ProfilePic },
  { id: 9, name: 'Rohit Mishra', class: '10th', roll: '20260811', photo: ProfilePic },
  { id: 10, name: 'Sanjana Rajput', class: '12th', roll: '20260934', photo: ProfilePic }
];

const Scorers2026 = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="scorers-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">2026 <span className="text-gradient">Highest Scorers</span></h2>
          <p className="section-subtitle">Celebrating the brilliant minds set to conquer their board exams!</p>
        </div>
        
        <div className="carousel-wrapper">
          <button className="carousel-btn prev-btn" onClick={scrollLeft}>&#10094;</button>
          
          <div className="carousel-track" ref={sliderRef}>
            {scorers.map(scorer => (
              <div className="scorer-card glass-panel" key={scorer.id}>
                <img src={scorer.photo} alt={scorer.name} className="scorer-photo" />
                <h4 className="scorer-name">{scorer.name}</h4>
                <div className="scorer-details">
                  <p><strong>Class:</strong> {scorer.class}</p>
                  <p><strong>Roll No:</strong> {scorer.roll}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={scrollRight}>&#10095;</button>
        </div>
      </div>
    </section>
  );
};

export default Scorers2026;
