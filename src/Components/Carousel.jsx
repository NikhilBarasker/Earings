import React , { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import img1 from '../Photoes/HomeBG.jpg'
import img2 from '../Photoes/carousel1.jpg'

import { smallC } from './data';

const Carousel = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example threshold for small screens
    };

    // Add event listener to listen for resize events
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <DIV>
     
      <Swiper
        cssMode={false}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        // keyboard={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img className='img' src={isSmallScreen ? smallC : img2} alt=""/></SwiperSlide>
        <SwiperSlide><img className='img' src={isSmallScreen ? smallC : img1} alt=""/></SwiperSlide>
        <SwiperSlide><img className='img' src={isSmallScreen ? smallC : img2} alt=""/></SwiperSlide>
        <SwiperSlide><img className='img' src={isSmallScreen ? smallC : img1} alt=""/></SwiperSlide>
      </Swiper>
   
    </DIV>
  )
}

export default Carousel

const DIV = styled.div`
margin-top: 120px;
/* 
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{
  color: white;
  --swiper-theme-color:'white';
}
.swiper-pagination-bullet:active{
  color: white;
  background-color: white;
} */

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
  width: 100vw;
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
  height: 79vh;
  object-fit: cover;
  /* filter: brightness(70%); */
}
.mySwiper{
    width: 100%;
    height: 79vh;
}

.swiper-button-prev:after, .swiper-button-next:after{
    color: white;
    font-size: 25px;
}

.swiper-wrapper{
    max-height: 79vh;
    /* border: 1px solid red; */
    object-fit: cover;
}

.swiper-pagination-bullet{
  /* color: white; */
  background-color: white;
  font: 20px;
}

 `;