import React , { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import img1 from '../Photoes/HomeBG.jpg'
import img2 from '../Photoes/carousel1.jpg'

const Carousel = () => {
  return (
    <DIV>
     
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        // keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img className='img' src={img1} alt=""/></SwiperSlide>
        <SwiperSlide><img className='img' src={img2} alt=""/></SwiperSlide>
        <SwiperSlide><img className='img' src={img1} alt=""/></SwiperSlide>
        <SwiperSlide><img className='img' src={img2} alt=""/></SwiperSlide>
      </Swiper>
   
    </DIV>
  )
}

export default Carousel

const DIV = styled.div`
margin-top: 100px;

#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide .img {
overflow: hidden;
  width: 100%;
  height: 80vh;
  object-fit: cover;
  filter: brightness(70%);
}
.mySwiper{
    width: 100%;
    height: 80vh;
}

.swiper-button-prev:after, .swiper-button-next:after{
    color: white;
    font-size: 25px;
}

.swiper-wrapper{
    max-height: 80vh;
    /* border: 1px solid red; */
    object-fit: cover;
}

 `;