import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Counter = ({ target, suffix = '', duration = 2000, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuad = progress * (2 - progress); 
      setCount(Math.floor(easeOutQuad * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [trigger, target, duration]);

  return (
    <h3 className="stat-number">
      {count}{suffix}
    </h3>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          <div className={`stat-card glass-panel ${isVisible ? 'fade-in-up' : 'hidden-start'}`} style={{animationDelay: '0s'}}>
            <div className="stat-icon">🎓</div>
            <Counter target={400} suffix="+" trigger={isVisible} />
            <p className="stat-label">Students Enrolled</p>
          </div>
          
          <div className={`stat-card glass-panel ${isVisible ? 'fade-in-up' : 'hidden-start'}`} style={{animationDelay: '0.2s'}}>
            <div className="stat-icon">🚀</div>
            <Counter target={600} trigger={isVisible} />
            <p className="stat-label">Target</p>
          </div>

          <div className={`stat-card glass-panel ${isVisible ? 'fade-in-up' : 'hidden-start'}`} style={{animationDelay: '0.4s'}}>
            <div className="stat-icon">🏆</div>
            <Counter target={90} suffix="+" trigger={isVisible} />
            <p className="stat-label">Marks Achievers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
