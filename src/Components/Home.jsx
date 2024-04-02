import React from 'react'
import HomeBG from '../Photoes/HomeBG.jpg'
import KaanKiBalli from '../Photoes/KaanKiBalli.jpg'
import '../App.css'
import Carousel from './Carousel'
import styled from 'styled-components'
import TopDealProducts from './TopDealProducts'
import Featured from './Featured'

const Home = () => {
  return (
    <>
    <Carousel/>
    <Container>
      <TopDealProducts/>
      <Featured/>
    </Container>
    <div className='Home' >
      {/* <img className='HomeBG' src={HomeBG} /> */}
      {/* <img style={{height:'200px', width:'250px'}} src={KaanKiBalli} /> */}
    </div>
    </>
  )
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