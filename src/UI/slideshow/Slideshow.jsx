import React, { Component } from "react";
import Slider from "react-slick";
import slideData from "../../Data/slideData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";
import bc from "./bcimg.jpg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      // className: "",
      lazyLoad: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      autoplay: true,
      // fade: true,
      autoplaySpeed: 6000,
      adaptiveHeight: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
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
      <>
        <div className="slideshow">
          <Slider {...settings}>
            {
              slideData.map((d,index)=>{
                return(
                  <div className="slideshow-box" key={index}>
                  <div className="img-for-slide">
                    <img className="slideImg" src={d.link} alt="li" />
                  </div>
                </div>
                )
              })
           
  }
          </Slider>
        </div>
      </>
    );
  }
}
