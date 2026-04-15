import React from 'react';
import './Lightbox.css';

const Lightbox = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>&times;</button>
        {src.includes('.mp4') ? (
          <video controls autoPlay className="lightbox-media">
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img src={src} alt="Full view" className="lightbox-media" />
        )}
      </div>
    </div>
  );
};

export default Lightbox;
