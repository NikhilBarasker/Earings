import React from 'react'
import styled from 'styled-components';

import {productCard} from './data'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const PeopleSearch = () => {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
      };
  return (
    <div>
      <Container1>
    <div className="mx-auto max-w-screen-xl  sm:px-6 sm:py-12 lg:px-8 " style={{backgroundColor:'#ececec'}}>
      <div className='flex justify-between mx-[20px]' style={{alignItems:'center', backgroundColor:'#ececec'}}>
        <h2 className="text-center text-xl font-bold text-gray-900 sm:text-3xl my-[20px]">People Also Search</h2>
        <Link to={'/NewColections'} onClick={handleLinkClick}><button className='flex justify-center align-middle text-center bg-customGray hover:bg-gray-800 h-[40px] px-[12px] text-white rounded-md' style={{ alignItems:'center'}}>See More..</button>
</Link>
      </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {productCard.map((product, index) => (
                <div key={index}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
    {productCard.slice(0, 3).map((product, index) => (
        <div key={index} style={{backgroundColor:'#ececec'}}>
            <ProductCard product={product} />
        </div>
    ))}
</div>
    </div>
</Container1>
    </div>
  )
}

export default PeopleSearch



const Container1 = styled.div `
width: 90vw;
margin-top: 40px;
height: auto;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* border: 2px solid red; */
border-bottom: 2px solid rgb(227 227 227);
background-color: #ececec;
`;