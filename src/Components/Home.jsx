import React from 'react'
import Testimonals from '../Components/Testimonals.jsx'
import '../App.css'
import Carousel from './Carousel'

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="Home">
       <Testimonals />
      </div>
    </>
  );
}

export default Home
