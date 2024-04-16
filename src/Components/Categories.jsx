import React, {useState} from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { productCard } from './data'
import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { productsCategory } from './data';

import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import Product1 from './Product1'

const Categories = () => {

  let navigate = useNavigate()

  const handleClick = () => {
  navigate('/Product1')
}

    const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <Product_Container>
        <div className="container">
          <h1>Shop by Categories</h1>
          <div className="Product_container">
            {/* {productCard.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))} */}
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              pagination={{
                type: "fraction",
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
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              initialSlide={1}
              autoplay={{ delay: 1000 }} // Autoplay with 3 seconds interval
              speed={800} // Animation speed (milliseconds)
            >
              {productsCategory.map((product, index) => (
                <SwiperSlide
                  onClick={handleClick}
                  key={index}
                  style={{ marginRight: "0px", backgroundColor: "transparent" }}
                >
                  {/* <ProductCard product={product} /> */}
                  <Card>
                    <div className="card">
                      <div className="card_image">
                        <img src={product.photo} />{" "}
                      </div>
                      <div className="card_title title-white">
                        <p>{product.category}</p>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Product_Container>
    </div>
  );
}

export default Categories

const Product_Container = styled.div `
width: 100%;
display: flex;
  justify-content: center;
  border-bottom: 2px solid rgb(227 227 227);

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
    display: none;
  color: white;
  background-color: gray;
}

div.swiper-button-next:after{
  font-size: 20px;
}

div.swiper-button-prev:after {
  font-size: 20px;
}

}
`;

const Card = styled.div `
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 10px;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  margin-right: 0px;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 10px;
  filter: brightness(50%);
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 10px;
  object-fit: cover;
  background-color: transparent;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}

`;