import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

function AndroidSlider(){
  
    var settings = {
      // dots: true,
      // className: "",
      lazyLoad: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 6000,
      adaptiveHeight: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="android-slide-container">
        <Slider {...settings}>
          <div className="android-slide-img">
            <img src={img1} alt="" />
          </div>
          <div className="android-slide-img">
            <img src={img2} alt="" />
          </div>
          <div className="android-slide-img">
            <img src={img3} alt="" />
          </div>
        </Slider>
      </div>
    );

}

export default AndroidSlider;
