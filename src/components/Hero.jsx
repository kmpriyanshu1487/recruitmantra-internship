import React, { useState, useEffect } from 'react';
import '../Style/Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    require('../Assets/slider1.png'),
    require('../Assets/slider2.png'),
    require('../Assets/slider3.png'),
  ];

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="Hero-container">
      <div className="container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => changeSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
