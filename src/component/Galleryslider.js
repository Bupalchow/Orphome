import React, { useEffect, useState } from 'react';
import './Gallery.css'; // Import your CSS file

const images = [
  'https://orphome.webullar.site/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1524069290683-0457abfe42c3%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wxOTY0MDZ8MHwxfHNlYXJjaHwyMjJ8fGNoaWxkcmVufGVufDB8fHx8MTY5ODUwMjkwNHww%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1080&q=75',
  'https://www.bing.com/ck/a?!&&p=e04cafe992d17c85JmltdHM9MTY5ODcxMDQwMCZpZ3VpZD0yOGZhNDAxNy1mMDg2LTY2OWEtMDUwOS01MmRkZjE4MDY3NjkmaW5zaWQ9NTU1NA&ptn=3&hsh=3&fclid=28fa4017-f086-669a-0509-52ddf1806769&u=a1L2ltYWdlcy9zZWFyY2g_cT1vcnBobmFnZSBpbWFnZXMmRk9STT1JUUZSQkEmaWQ9RkMyMTgyRDlDMUZGMjc0RjAyOERGOEM1RTE2QzU2QUM3OUY0MzAzMg&ntb=1',
  'https://th.bing.com/th?id=OIP.bN7whTDgBfTmZzZlnExy8QHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const autoplayInterval = setInterval(nextImage, 3000); 

    return () => {
      clearInterval(autoplayInterval);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="gallery">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <div className="nav-buttons">
        <button className="gallery-button previous-button" onClick={goToPrevious}>Previous</button>
        <button className="gallery-button next-button"  onClick={goToNext}>Next</button>
      </div>
    </div>
  );
}

export default Gallery;
