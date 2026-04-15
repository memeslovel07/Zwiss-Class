import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleryPhotos } from '../data/homeData';
import Lightbox from './Lightbox';
import './HomeGallerySlider.css';

const HomeGallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Show 3 items on desktop, 1 on mobile
  const itemsToShow = window.innerWidth > 768 ? 3 : 1;
  const slidingPhotos = galleryPhotos.slice(0, 10); // Use first 10 for slider

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (slidingPhotos.length - (itemsToShow - 1)));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slidingPhotos.length, itemsToShow]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (slidingPhotos.length - (itemsToShow - 1)));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (slidingPhotos.length - (itemsToShow - 1))) % (slidingPhotos.length - (itemsToShow - 1)));
  };

  return (
    <section className="home-gallery-slider">
      <div className="container">
        <h2 className="section-title">Memory <span className="text-gradient">Wall</span></h2>
        <p className="section-subtitle">A glimpse into our vibrant learning environment.</p>

        <div 
          className="gallery-slider-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="gallery-slider-track"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {slidingPhotos.map((photo, index) => (
              <div key={index} className="gallery-slider-item" onClick={() => setSelectedImg(photo.src)}>
                <div className="gallery-polaroid-card">
                  <div className="gallery-polaroid-inner">
                    <img src={photo.src} alt={photo.label} />
                  </div>
                  <p className="gallery-polaroid-label">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="gallery-nav prev" onClick={handlePrev}>&lt;</button>
          <button className="gallery-nav next" onClick={handleNext}>&gt;</button>
        </div>

        <div className="slider-footer">
          <Link to="/gallery" className="btn btn-primary">View All Photos</Link>
        </div>
      </div>
      <Lightbox src={selectedImg} onClose={() => setSelectedImg(null)} />
    </section>
  );
};

export default HomeGallerySlider;
