import React from "react";
import { sliderImgs } from "../../utils/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeaderSlider.css";

const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid">
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImgs.map((img, index) => (
            <div key={index} className="slider-slide">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeaderSlider;
