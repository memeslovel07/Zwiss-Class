import React, { useState } from 'react';
import { questionPapersData } from '../data/questionPapers';
import './QuestionPapers.css';

const QuestionPapers = () => {
  const [activeClass, setActiveClass] = useState('10th');
  const [activeYear, setActiveYear] = useState('2024');

  const classes = Object.keys(questionPapersData);
  const years = questionPapersData[activeClass].map(y => y.year);

  // When class changes, update the active year if the old one isn't available
  const handleClassChange = (cls) => {
    setActiveClass(cls);
    const newYears = questionPapersData[cls].map(y => y.year);
    if (!newYears.includes(activeYear)) {
      setActiveYear(newYears[0]);
    }
  };

  const currentYearData = questionPapersData[activeClass].find(y => y.year === activeYear);

  return (
    <div className="papers-section">
      <div className="container">
        <header className="papers-header">
          <h1>Previous Years Questions</h1>
          <p className="papers-subtitle">Master your exams with official UP Board question papers from previous years.</p>
          
          <div className="selection-container">
            <div className="class-toggle">
              {classes.map(cls => (
                <button 
                  key={cls}
                  className={`toggle-btn ${activeClass === cls ? 'active' : ''}`}
                  onClick={() => handleClassChange(cls)}
                >
                  Class {cls}
                </button>
              ))}
            </div>

            <div className="year-selector">
              {years.map(year => (
                <button 
                  key={year}
                  className={`year-btn ${activeYear === year ? 'active' : ''}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="papers-grid">
          {currentYearData?.files.map((file, idx) => (
            <div key={idx} className="paper-card">
              <div className="paper-icon">📄</div>
              <div className="paper-info">
                <h3>{file.name}</h3>
                <p>Official UP Board Paper</p>
              </div>
              <a href={file.path} target="_blank" rel="noopener noreferrer" className="download-btn">
                View Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionPapers;
