import React from 'react'
import styled from 'styled-components';

import {productCard} from './data'
import ProductCard from './ProductCard';

const Discover = () => {
  return (
    <Container>
    <div className="mx-auto max-w-screen-xl  sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-center text-xl font-bold text-gray-900 sm:text-3xl my-[30px]">New Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {productCard.map((product, index) => (
                <div key={index}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    </div>
</Container>
  )
}

export default Discover


const Container = styled.div `
width: 90vw;
height: auto;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* border: 2px solid red; */
`;
