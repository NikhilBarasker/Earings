import React, {useState} from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import {productCard} from './data'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const TopDealProducts = () => {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div style={{backgroundColor:'#e3d6c5;'}}>
    <Product_Container>
        <div className='container'>
            <h1>Top Fetured Products</h1>
            <div className='Product_container'>
                {/* {productCard.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))} */}
            <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}

        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        initialSlide={1}
      >
        {productCard.map((product, index) => (
            <SwiperSlide key={index} style={{backgroundColor:'#ececec'}}>
                    <ProductCard product={product} />
            </SwiperSlide>
                ))}
      </Swiper>
            </div>

            
            
        </div>
    </Product_Container>
    </div>
  )
}

export default TopDealProducts

const Product_Container = styled.div `
width: 100%;
display: flex;
  justify-content: center;

/* border: 2px solid yellow; */
.container h1{
    font-family: sans-serif;
    align-items: start;
    font-size: 2rem;
    font-weight: 700;
    margin: 20px 10px;
}

.Product_container{
    



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
  width: fit-content;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: auto;
  margin: 20px auto;
}
.append-buttons {
  text-align: center;
  margin-top: 20px;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
}

.swiper-pagination-fraction{
    display: none;
}

div.swiper-button-prev, div.swiper-button-next{
  color: white;
  background-color: gray;
  border-radius: 50px;
  padding: 0 22px;
}

div.swiper-button-next:after{
  font-size: 20px;
}

div.swiper-button-prev:after {
  font-size: 20px;
}
}
.swiper-wrapper{
  padding: 20px 0;
}
`;