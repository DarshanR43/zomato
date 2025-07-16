import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Styles/details.css";

const ImageCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src="./images/f1.jpg" alt="Breakfast" />
        </div>
        <div>
          <img src="./images/f2.jpg" alt="Lunch" />
        </div>
        <div>
          <img src="./images/f3.jpg" alt="Dinner" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
