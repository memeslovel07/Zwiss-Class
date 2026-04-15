import React, { useState } from "react";
import "./Reviews.css";
import Lightbox from "./Lightbox";

import { reviewVideos as videos, reviewImages as images } from '../data/homeData';

const Reviews = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);


  return (
    <div className="reviews-page">
      <div className="container">
        <h1 className="reviews-title">
          Student <span className="text-gradient">Guestbook</span>
        </h1>
        <p className="reviews-subtitle">
          Real stories, real results. A look through our students' journey.
        </p>

        <div className="book-layout">
          {/* VIDEO PAGES */}
          {videos.map((vid, index) => (
            <div key={`v-${index}`} className="guestbook-page video-page" onClick={() => setSelectedMedia(vid.src)}>
              <div className="tape"></div>
              <div className="page-content">
                <div className="video-preview">
                  <video muted>
                    <source src={vid.src} type="video/mp4" />
                  </video>
                  <div className="play-hint">▶</div>
                </div>
                <p className="page-caption">{vid.label}</p>
              </div>
            </div>
          ))}

          {/* IMAGE PAGES */}
          {images.map((img, index) => (
            <div key={`i-${index}`} className="guestbook-page" onClick={() => setSelectedMedia(img)}>
              <div className="paper-texture"></div>
              <div className="page-content">
                <img src={img} alt={`review-${index}`} className="page-image" />
                <p className="page-caption">Review {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox src={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </div>
  );
};

export default Reviews;

