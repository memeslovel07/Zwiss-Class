import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { reviewVideos, reviewImages } from '../data/homeData';
import Lightbox from './Lightbox';
import './HomeReviewsSlider.css';

const HomeReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Combine videos and a few images for the slider
  const items = [
    ...reviewVideos.map(v => ({ ...v, type: 'video' })),
    ...reviewImages.slice(0, 4).map((img, i) => ({ src: img, label: `Student Review ${i + 1}`, type: 'image' }))
  ];

  const itemsToShow = window.innerWidth > 768 ? 2 : 1;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (items.length - (itemsToShow - 1)));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, items.length, itemsToShow]);

  return (
    <section className="home-reviews-slider">
      <div className="container">
        <h2 className="section-title">Student <span className="text-gradient">Guestbook</span></h2>
        <p className="section-subtitle">What our incredible students have to say about their journey.</p>

        <div 
          className="reviews-slider-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="reviews-slider-track"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="reviews-slider-item" onClick={() => setSelectedMedia(item.src)}>
                <div className="home-review-card glass-panel">
                  <div className="home-review-media">
                    {item.type === 'video' ? (
                      <div className="home-video-thumb">
                        <video muted>
                          <source src={item.src} type="video/mp4" />
                        </video>
                        <div className="home-play-icon">▶</div>
                      </div>
                    ) : (
                      <img src={item.src} alt={item.label} />
                    )}
                  </div>
                  <div className="home-review-info">
                    <p className="home-review-label">{item.label}</p>
                    <div className="home-stars">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-slider-dots">
            {Array.from({ length: items.length - (itemsToShow - 1) }).map((_, i) => (
                <button 
                    key={i} 
                    className={`reviews-dot ${currentIndex === i ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(i)}
                ></button>
            ))}
        </div>

        <div className="slider-footer">
          <Link to="/reviews" className="btn btn-outline">Read All Reviews</Link>
        </div>
      </div>
      <Lightbox src={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </section>
  );
};

export default HomeReviewsSlider;
