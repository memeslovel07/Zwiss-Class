import React, { useState } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox';

import { galleryPhotos as photos } from '../data/homeData';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="gallery-page-wrapper">
      <section className="gallery-header">
        <div className="container">
          <h2 className="section-title">Memory <span className="text-gradient">Wall</span></h2>
          <p className="section-subtitle">Captured moments from our journey of excellence.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="memory-board">
            {photos.map((photo, index) => (
              <div 
                className={`polaroid item-${index + 1}`} 
                key={index}
                onClick={() => setSelectedImg(photo.src)}
              >
                <div className="polaroid-inner">
                  <img src={photo.src} alt={photo.label} className="polaroid-img" />
                  <p className="polaroid-caption">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox src={selectedImg} onClose={() => setSelectedImg(null)} />
    </div>
  );
};

export default Gallery;


