import React, { useState } from 'react';
import './Slider.css'; 

const testimonials = [
  {
    id: 1,
    name: 'priyanka',
    rating: 5,
    text: 'i recently used this website and was very delighted to find the possible good i could do to the society ',
  },
  {
    id: 2,
    name: 'raja',
    rating: 5,
    text: 'i recently used this website and was very delighted to find the possible good i could do to the society ',
  },
  {
    id: 3,
    name: 'rani',
    rating: 5,
    text: 'i recently used this website and was very delighted to find the possible good i could do to the society ',
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <img src={`profile${testimonials[currentSlide].id}.jpg`} alt={testimonials[currentSlide].name} />{/* add profiles images with respect to id  */}
        <h2>{testimonials[currentSlide].name}</h2>
        <div className="rating">Rating: {testimonials[currentSlide].rating} stars</div>
        <p>{testimonials[currentSlide].text}</p>
      </div>
      <div id='buttonDiv'>
      <button onClick={prevSlide} className="slider-button prev-button">
        &lt;
      </button>
      <button onClick={nextSlide} className="slider-button next-button">
        &gt;
      </button>
      </div>
    </div>
  );
}

export default Slider;
