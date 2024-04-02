import React from 'react'
import Testimonals from '../Components/Testimonals.jsx'
import '../App.css'
import Carousel from './Carousel'
import styled from 'styled-components'
import TopDealProducts from './TopDealProducts'
import Featured from './Featured'

const Home = () => {
  return (
    <>
<<<<<<< HEAD
      <Carousel />
      <div className="Home">
       <Testimonals />
      </div>
=======
    <Carousel/>
    <Container>
      <TopDealProducts/>
      <Featured/>
    </Container>
    <div className='Home' >
      {/* <img className='HomeBG' src={HomeBG} /> */}
      {/* <img style={{height:'200px', width:'250px'}} src={KaanKiBalli} /> */}
    </div>
>>>>>>> b8136826c1c140c0c2039da5eec4380b7bc2927a
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