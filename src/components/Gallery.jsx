import React from 'react';
import './Gallery.css';

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
  const photos = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, 
    Img10, Img11, Img13, Img15, Img16, Img17, Img18, Img19, Img20
  ];

  return (
    <div className="gallery-page-wrapper">
      <section className="gallery-header" style={{textAlign: 'center', paddingTop: '6rem', paddingBottom: '2rem'}}>
        <div className="container">
          <h2 className="section-title">Our <span className="text-gradient">Photo Gallery</span></h2>
          <p className="section-subtitle">A glimpse into our interactive classrooms and brilliant students.</p>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((src, index) => (
              <div className={`gallery-item item-${index + 1}`} key={index}>
                <img src={src} alt={`Gallery photo ${index + 1}`} className="gallery-img" />
                <div className="gallery-overlay">
                  <span>View Photo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
