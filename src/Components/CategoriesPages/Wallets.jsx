import React, { useState } from 'react'
import { backgroundImage1 } from '../data'
const Wallets = () => {
    const products = [
        {
          id: 1,
          name: 'SoleStride Elegance',
          description: 'Premium sneakers designed for ultimate comfort and style.',
          price: 99.99,
          image: 'https://via.placeholder.com/400x300?text=SoleStride+Elegance',
          category: 'Sneakers'
        },
        {
          id: 2,
          name: 'UrbanTrail Sneakers',
          description: 'Versatile sneakers perfect for urban adventures.',
          price: 79.99,
          image: 'https://via.placeholder.com/400x300?text=UrbanTrail+Sneakers',
          category: 'Sneakers'
        },
        {
          id: 3,
          name: 'VelvetGlide Boots',
          description: 'Luxurious velvet boots with a sleek design.',
          price: 129.99,
          image: 'https://via.placeholder.com/400x300?text=VelvetGlide+Boots',
          category: 'Boots'
        },
        {
          id: 4,
          name: 'SportyStride Runners',
          description: 'Lightweight running shoes for active lifestyles.',
          price: 69.99,
          image: 'https://via.placeholder.com/400x300?text=SportyStride+Runners',
          category: 'Sneakers'
        },
        {
            id: 4,
            name: 'Classic Leather Bifold Wallet',
            description: 'Timeless leather bifold wallet with multiple card slots and cash compartment.',
            price: 49.99,
            image: 'https://via.placeholder.com/400x300?text=Classic+Leather+Bifold+Wallet',
            category: 'Wallets'
          },
          {
            id: 5,
            name: 'Slim Minimalist Card Holder',
            description: 'Sleek and compact card holder wallet for minimalist carry.',
            price: 29.99,
            image: 'https://via.placeholder.com/400x300?text=Slim+Minimalist+Card+Holder',
            category: 'Wallets'
          },
          {
            id: 6,
            name: 'Traveler\'s RFID Blocking Wallet',
            description: 'RFID-blocking wallet with dedicated passport and card slots for secure travel.',
            price: 39.99,
            image: 'https://via.placeholder.com/400x300?text=Traveler\'s+RFID+Blocking+Wallet',
            category: 'Wallets'
          },
          {
            id: 7,
            name: 'Luxury Leather Zip-Around Wallet',
            description: 'High-end leather zip-around wallet with multiple compartments and zippered closure.',
            price: 79.99,
            image: 'https://via.placeholder.com/400x300?text=Luxury+Leather+Zip-Around+Wallet',
            category: 'Wallets'
          },
          {
            id: 8,
            name: 'Sporty Nylon Wallet',
            description: 'Casual and sporty nylon wallet with secure velcro closure.',
            price: 19.99,
            image: 'https://via.placeholder.com/400x300?text=Sporty+Nylon+Wallet',
            category: 'Wallets'
          },
          {
            id: 9,
            name: 'Executive Leather Money Clip',
            description: 'Executive-style leather money clip wallet for minimalistic carry.',
            price: 34.99,
            image: 'https://via.placeholder.com/400x300?text=Executive+Leather+Money+Clip',
            category: 'Wallets'
          },
          {
            id: 10,
            name: 'Stylish Vegan Leather Wallet',
            description: 'Fashionable vegan leather wallet with card slots and coin pouch.',
            price: 39.99,
            image: 'https://via.placeholder.com/400x300?text=Stylish+Vegan+Leather+Wallet',
            category: 'Wallets'
          },
        // Add more products as needed
      ];
      const [isLiked, setIsLiked] = useState(false);

      const handleLikeToggle = () => {
        setIsLiked(!isLiked);
      };
      const [selectedId, setSelectedId] = useState();
  return (
    <div className='mt-12'>
      <div className='relative h-96'>
        <img
          src={backgroundImage1}
          alt=""
          className='absolute inset-0 w-full h-full object-cover brightness-75'
          style={{ filter: 'brightness(50%)' }}
        />
        <div className='absolute inset-0 flex items-center justify-center text-white text-sm font-medium'>
          <p className='text-2xl'>
            <span className="hover:underline uppercase cursor-pointer text-2xl">Home</span> / {' '}
            <span className="hover:underline uppercase cursor-pointer text-2xl">Categories</span> / {' '}
            <span className='uppercase text-xl'>Wallets</span>
          </p>
        </div>
      </div>

      <div className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-extrabold text-gray-800 mb-12'>Premium Wallets</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {/* Product Cards */}
            {products.map((product, index) => (
                <div key={product.id} className='bg-white rounded-xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative'>
      <div 
        className={`bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4 cursor-pointer 
          ${isLiked ? 'transform scale-105' : 'transform scale-100 hover:scale-110'}`}
        onClick={handleLikeToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" onClick={() => setSelectedId(product.id)} className={`fill-current ${selectedId === product.id ? 'text-red-500' : 'text-gray-800'} inline-block`} viewBox="0 0 64 64">
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"
          ></path>
        </svg>
      </div>
      <div className='w-full h-48 overflow-hidden'>
        <img src={product.image} alt={product.name} className='h-full w-full object-cover' />
      </div>
      <div>
        <h3 className='text-lg font-bold text-gray-800'>{product.name}</h3>
        <p className='text-gray-500 text-sm mt-2'>{product.description}</p>
        <h4 className='text-lg text-gray-700 font-bold mt-4'>{`Rs.${product.price}`}</h4>
      </div>
    </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Wallets

