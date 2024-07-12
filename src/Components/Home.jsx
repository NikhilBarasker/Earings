import React from 'react'
import '../App.css'
import '../Responsive.css'
import Carousel from './Carousel'
import styled from 'styled-components'
import TopDealProducts from './TopDealProducts'
import Featured from './Featured'
import Advantages from './Advantages.jsx'
import Banner from './Banner.jsx'
import Discover from './Discover.jsx'
import Categories from './Categories.jsx'
import PeopleSearch from './PeopleSearch.jsx'
import Trendings from './Trendings.jsx'
import Testimonals from './Testimonals.jsx'
// import Discover from './Discover.jsx'

const Home = () => {
  return (
    <div style={{overflowX: "hidden"}}>
      <Carousel />
      <Container>
        <TopDealProducts />
        <Advantages />
        <Featured />
        <Banner />
        <Trendings />
        <Discover />
        <Categories />
        <Testimonals />
        <PeopleSearch />
      </Container>
    </div>
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
z-index:1;
/* border: 2px solid red; */
`;