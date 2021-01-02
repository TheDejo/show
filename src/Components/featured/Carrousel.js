import React from 'react';
import Slider from "react-slick";

import paul1 from '../../resources/images/paul1.jpg';
import paul2 from '../../resources/images/paul2.jpg';
import paul3 from '../../resources/images/paul3.jpg';

const Carrousel = () => {
  const settings ={
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow:'hidden'
      }}
    >
      <Slider {...settings}>
        <div>
        <div
          className="carrousel_image"
          style={{
            background:`url(${paul1})`,
            height:`${window.innerHeight}px`
          }}
        ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background:`url(${paul2})`,
              height:`${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background:`url(${paul3})`,
              height:`${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
      
    </div>
  )
}

export default Carrousel;