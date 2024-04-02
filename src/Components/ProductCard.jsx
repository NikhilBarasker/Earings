import React from 'react'
import {top1, top2, top3} from './data'
import AddCartBtn from './AddCartBtn';
import { Link } from 'react-router-dom';
import WishlistBtn from './WishlistBtn';

const ProductCard = (product) => {
    
    console.log(product.product.productName);
  return (
    <div className='w-[350px] border-[2px] border-gray-100'>
      <Link className="group relative block overflow-hidden">
  <WishlistBtn/>

  <img
    src={product.product.imageUrl}
    alt=""
    className="h-[65px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-100 bg-white p-6">
    <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">{product.product.productName}</h3>

    <p className="mt-1.5 text-sm text-gray-700">Rs.{product.product.price}</p>

    <AddCartBtn product={product.product} />
  </div>
</Link>
    </div>
  )
}

export default ProductCard
