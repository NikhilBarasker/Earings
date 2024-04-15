import React from 'react'
import { backgroundImage1 } from '../data'
const Wallets = () => {
  return (
    <div className='mt-[130px] h-[250px]'>
  <div className='relative h-[250px]'>
  <img src={backgroundImage1} alt="" className='absolute inset-0 w-full h-full object-cover brightness-75' style={{filter:'brightness(50%)'}}/>
  <div className='absolute inset-0 flex items-center justify-center text-white text-sm font-medium'>
    <p className='text-2xl'>
      <span className="hover:underline uppercase cursor-pointer text-2xl">Home</span> / {' '}
      <span className="hover:underline uppercase cursor-pointer text-2xl">Categories</span> /{' '}
      <span className='uppercase text-xl'>Wallets</span>
    </p>
  </div>
</div>

</div>

  )
}

export default Wallets

