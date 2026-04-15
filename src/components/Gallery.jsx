import React, { useState } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox';

import Img1 from '../../resources/1.jpeg';
import Img2 from '../../resources/2.jpeg';
import Img3 from '../../resources/3.jpeg';
import Img4 from '../../resources/4.jpeg';
import Img5 from '../../resources/5.jpeg';
import Img6 from '../../resources/6.jpeg';
import Img7 from '../../resources/7.jpeg';
import Img8 from '../../resources/8.jpeg';
import Img9 from '../../resources/9.jpeg';
import Img10 from '../../resources/10.jpeg';
import Img11 from '../../resources/11.jpeg';
import Img13 from '../../resources/13.jpeg';
import Img15 from '../../resources/15.jpeg';
import Img16 from '../../resources/16.jpeg';
import Img17 from '../../resources/17.jpeg';
import Img18 from '../../resources/18.jpeg';
import Img19 from '../../resources/19.jpeg';
import Img20 from '../../resources/20.jpeg';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    { src: Img1, label: "Classroom Vibes" },
    { src: Img2, label: "Topper Talk" },
    { src: Img3, label: "Interactive Session" },
    { src: Img4, label: "Board Prep" },
    { src: Img5, label: "Student Success" },
    { src: Img6, label: "Grammar Masterclass" },
    { src: Img7, label: "Learning Together" },
    { src: Img8, label: "Our Pride" },
    { src: Img9, label: "Study Focus" },
    { src: Img10, label: "After Class" },
    { src: Img11, label: "Happy Moments" },
    { src: Img13, label: "Group Learning" },
    { src: Img15, label: "Doubt Clearing" },
    { src: Img16, label: "Bright Futures" },
    { src: Img17, label: "Board Exam Ready" },
    { src: Img18, label: "English Mastery" },
    { src: Img19, label: "Teaching Fun" },
    { src: Img20, label: "The Journey" }
  ];

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


