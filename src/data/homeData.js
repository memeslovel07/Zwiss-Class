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

import video14 from "../../resources/reviews/v.mp4";
import video15 from "../../resources/reviews/i.mp4";

export const galleryPhotos = [
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

export const reviewVideos = [
  { src: video14, label: "Student Success Story" },
  { src: video15, label: "Topper Feedback" }
];

// Helper to get review images (1.jpeg to 12.jpeg)
export const reviewImages = Array.from({ length: 12 }, (_, i) => {
    // We use a relative path from this file
    return new URL(`../../resources/reviews/${i + 1}.jpeg`, import.meta.url).href;
});
