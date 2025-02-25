import React, { useState, useEffect } from 'react';
import './CarouselComponent.css';
import { IoIosArrowDroprightCircle,  IoIosArrowDropleftCircle  } from "react-icons/io";

export function EmblaCarousel() {
  const slides = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735125497_English_desk.jpg?im=Resize=(2368,400)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735125497_English_desk.jpg?im=Resize=(2368,400)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735115131_Featured_spotlight_1184x200.jpg?im=Resize=(2368,400)",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next slide handler
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Previous slide handler
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="embla w-[98%] mx-auto rounded overflow-hidden">
      <div className="embla__container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`}/>
          </div>
        ))}
      </div>

      {/* Prev and Next Buttons */}
      <button className="embla__prev" onClick={prevSlide}><IoIosArrowDropleftCircle size={25}/></button>
      <button className="embla__next" onClick={nextSlide}><IoIosArrowDroprightCircle size={25}/></button>
    </div>
  );
}
