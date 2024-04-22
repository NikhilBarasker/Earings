import React from 'react'

const Banner = () => {
  return (
    <div>
    {/* <* class="font-[sans-serif] p-6" style={{background: 'rgb(90,88,113)',
background: 'linear-gradient(180deg, rgba(90,88,113,1) 0%, rgba(155,132,97,1) 93%)'}}>*/}
      <div class="font-[sans-serif] p-6" style={{backgroundColor:'#2e2d3d'}}>
            <div class="container mx-auto flex flex-col justify-center items-center">
                <h2 class="text-white text-3xl font-bold mb-4">Discover Our New Collection</h2>
                <p class="text-white text-base text-center mb-6">Elevate your style with our latest arrivals. Shop now and enjoy exclusive discounts!</p>
                <a href="javascript:void(0)" class="bg-white text-sm text-blue-600 font-semibold py-2 px-6 rounded hover:bg-slate-100" style={{color:'rgb(90 88 113)'}}>
                    Shop Now
                </a>
            </div>
        </div>
    </div>
  )
}

export default Banner
