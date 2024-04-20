import React from 'react'
import Testimonals from '../Components/Testimonals.jsx'
import '../App.css'
import '../Responsive.css'
import Carousel from './Carousel'
import styled from 'styled-components'
import TopDealProducts from './TopDealProducts'
import Featured from './Featured'
import Advantages from './Advantages.jsx'
import Newslater from './Newslater.jsx'
import Banner from './Banner.jsx'
import Discover from './Discover.jsx'
import Phone from './Phone.jsx'
import Categories from './Categories.jsx'
import PeopleSearch from './PeopleSearch.jsx'
import Trendings from './Trendings.jsx'
// import Discover from './Discover.jsx'

const Home = () => {
  return (
    <>
      <Carousel />
    <Container>
      <TopDealProducts/>
      <Advantages/>
      <Featured/>
      <Banner/>
      <Trendings/>
      <Discover/>
      <Categories/>
      <PeopleSearch/>
    </Container>
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