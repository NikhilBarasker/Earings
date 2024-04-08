import React from 'react'

const Newslater = () => {
  return (
    <div>
      <div class="mt-28 px-4 sm:px-10 mb-[10px]">
      <div class="max-w-7xl mx-auto py-16 px-6 relative" style={{background:'rgb(90 88 113)', backgroundColor:'linear-gradient(180deg, rgba(185,141,88,0.8968837535014006) 0%, rgba(185,141,88,0.7484243697478992) 93%)'}}>
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="md:text-4xl text-3xl font-extrabold mb-6 text-white">Subscribe to Our Newsletter</h2>
          <div class="my-6">
            <p class="text-white">Subscribe to our newsletter and stay up to date with the latest news, updates, and
              exclusive offers. Get
              valuable insights. Join our community today!</p>
          </div>
          <div
            class="max-w-2xl left-0 right-0 mx-auto w-full bg-white p-5 flex items-center shadow-lg absolute -bottom-10 rounded-md">
            <input type="email" placeholder="Enter your email"
              class="w-full bg-gray-50 py-3.5 px-4 text-base focus:outline-gray-300" style={{}}/>
            <button
              class="bg-[#333] hover:bg-[#111] text-white flex items-center transition-all font-semibold px-5 py-4" style={{background:'rgb(90 88 113)', borderRadius:'10px'}}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Newslater
