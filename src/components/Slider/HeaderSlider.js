import React from "react";
import { sliderImgs } from "../../utils/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeaderSlider.css";
import { Link } from "react-router-dom";

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

  // return (
  //   <div className="container-fluid">
  //     <div className="slider-container">
  //       <Slider {...settings}>
  //         {sliderImgs.map((img, index) => (
  //           <div key={index} className="slider-slide">
  //             <img src={img} alt={`Slide ${index + 1}`} />
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>
  //   </div>
  // );
  return (
    <div className="container-fluid">
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImgs.map((slide, slideIndex) => (
            <div key={slideIndex} className="slider-slide">
              <div className="image-grid"> {/* Ensure appropriate CSS for grid layout */}
              <div className="top-row">
                {slide.images.slice(0,2).map((img, imgIndex) => (
                
                  <Link to={`/category/${img.link}`} key={imgIndex} className="m-3 image-link">
                    <img src={img.src} alt={`Slide ${slideIndex + 1}, Image ${imgIndex + 1}`} />
                  </Link>
                ))}
                </div>
                <div className="bottom-row">
                {slide.images.slice(2).map((img, imgIndex) => (
                
                <Link to={`/category/${img.link}`} key={imgIndex} className="m-3 image-link">
                  <img src={img.src} alt={`Slide ${slideIndex + 1}, Image ${imgIndex + 3}`} />
                </Link>
              ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeaderSlider;
