import React, { useState } from 'react';
import { syllabusData } from '../data/syllabus';
import './Syllabus.css';

const Syllabus = () => {
  const [activeClass, setActiveClass] = useState('10');
  const classes = ['9', '10', '11', '12'];

  return (
    <div className="syllabus-section">
      <div className="container">
        <header className="syllabus-header">
          <h1>Academic Syllabus</h1>
          <p className="syllabus-subtitle">UP Board English - Complete Curriculum for Excellence</p>
          
          <div className="selection-wrapper">
             <span className="selection-label">Select Your Class:</span>
             <div className="class-selector">
              {classes.map((cls) => (
                <button 
                  key={cls} 
                  className={`class-btn ${activeClass === cls ? 'active' : ''}`}
                  onClick={() => setActiveClass(cls)}
                >
                  <span className="btn-text">Class {cls}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="syllabus-grid">
          {syllabusData[activeClass].map((cat, idx) => (
            <div key={`${activeClass}-${idx}`} className="syllabus-card">
              <h2 className="category-title">{cat.category}</h2>
              {cat.sections.map((section, sIdx) => (
                <div key={sIdx} className="sub-section">
                  <span className="sub-section-title">{section.title}</span>
                  <ul className="syllabus-list">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
