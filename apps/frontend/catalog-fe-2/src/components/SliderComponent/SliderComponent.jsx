import React from 'react'
import Slider from "react-slick";
import {Image} from 'antd'
const SliderComponent = ({arrImages}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000,
      };
  return (
      <Slider {...settings}>
        {arrImages.map((item) => {
                return (
                <Image src={item} alt="slider" preview={false} width='100%' height='400px'/>
                )
            }) 
        }
      </Slider>
  )
}

export default SliderComponent