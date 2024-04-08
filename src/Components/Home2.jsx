import React from 'react'
import Testimonals from '../Components/Testimonals.jsx'
import '../App.css'
import Carousel from './Carousel'
import styled from 'styled-components'
import TopDealProducts from './TopDealProducts'
import Featured from './Featured'
import Newslater from './Newslater.jsx'
import Banner from './Banner.jsx'

const Home2 = () => {
  return (
    <>
      <Carousel />
      <div className="Home">
       <Testimonals />
      </div>
    <Carousel/>
    <Container>
      <Featured/>
      <Banner/>
      <TopDealProducts/>
      <Newslater/>
    </Container>
    <div className='Home' >
      {/* <img className='HomeBG' src={HomeBG} /> */}
      {/* <img style={{height:'200px', width:'250px'}} src={KaanKiBalli} /> */}
    </div>
    </>
  );
}

export default Home2

const Container = styled.div `
width: 90vw;
height: auto;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
/* border: 2px solid red; */
`;