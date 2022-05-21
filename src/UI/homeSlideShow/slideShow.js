import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slideData from "../../Data/slideData";



class SlideShow extends Component{
    render(){
    const settings = {
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };
    return(
        <div className="homeSlide">
            <Slider {...settings}>
                {slideData.map((d)=>{
                    return (
                        <div key={d.index}>
                            <img src={d.link} alt='slide'/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
            }
}

export default SlideShow