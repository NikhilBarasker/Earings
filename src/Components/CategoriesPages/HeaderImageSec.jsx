import React from 'react'

const HeaderImageSec = ({categ, img}) => {
  return (
    <div>
      <div className='relative h-96'>
        <img
          src={img}
          alt=""
          className='absolute inset-0 w-full h-full object-cover brightness-75'
          style={{ filter: 'brightness(50%)' }}
        />
        <div className='absolute inset-0 flex items-center justify-center text-white text-sm font-medium mt-[7%]'>
          <p className='text-2xl text-center'>
            <span className="hover:underline uppercase cursor-pointer text-2xl">Home</span> / {' '}
            <span className="hover:underline uppercase cursor-pointer text-2xl">Categories</span> / {' '}
            <span className='uppercase text-xl'>{categ}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderImageSec
