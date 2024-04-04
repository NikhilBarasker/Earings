import React from 'react'
import Testimonals from '../Components/Testimonals.jsx'
import '../App.css'
import Carousel from './Carousel'
import styled from 'styled-components'
import TopDealProducts from './TopDealProducts'
import Featured from './Featured'
import Advantages from './Advantages.jsx'

const Home = () => {
  return (
    <>
      <Carousel />
      <Container>
        <TopDealProducts />
        <Featured />
      </Container>
      <Advantages />
      <div className="Home">
        <Testimonals />
      </div>
    </>
  );
}

export default Home

const Container = styled.div `
width: 90vw;
height: auto;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
/* border: 2px solid red; */
`;