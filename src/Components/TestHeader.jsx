import React, { useState } from 'react'

const TestHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the visibility of the collapseMenu
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen); // Toggle the state between true and false
    };
  return (
    <div>
      {/* <header class='border-b bg-white font-sans min-h-[60px]'>
    <div class='flex flex-wrap items-center justify-between px-10 py-3 gap-4 relative'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>
      <div class='flex items-center max-lg:ml-auto lg:order-1'>
        <span class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px"
            class="cursor-pointer fill-[#333] hover:fill-[#007bff] inline" viewBox="0 0 64 64">
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000" />
          </svg>
          <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">0</span>
        </span>
        <span class="relative ml-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
            class="cursor-pointer fill-[#333] hover:fill-[#007bff] inline" viewBox="0 0 512 512">
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"></path>
          </svg>
          <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">0</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
          class="cursor-pointer fill-[#333] hover:fill-[#007bff] ml-8">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <button id="toggle" class='lg:hidden ml-7'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <ul id="collapseMenu" class='lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-4 max-lg:my-4'>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-blue-600 text-[15px] font-bold text-blue-600 block'>Home</a></li>
        <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>Pages<svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block" viewBox="0 0 24 24">
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
          </a>
          <ul
            class='absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50'>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About</a></li>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Contact</a></li>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Login</a></li>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Sign up</a></li>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Blog</a></li>
          </ul>
        </li>
        <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>Blog<svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block" viewBox="0 0 24 24">
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
          </a>
          <ul
            class='absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px]'>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Foods</a></li>
            <li class='border-b py-2 '>
              <a href='javascript:void(0)' class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Sale</a>
            </li>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Marketing</a></li>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Investment</a></li>
          </ul>
        </li>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Team</a></li>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About</a></li>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Contact</a></li>
      </ul>
    </div>
  </header> */}
  <header className='border-b bg-white font-sans min-h-[60px]'>
      <div className='flex flex-wrap items-center justify-between px-10 py-3 gap-4 relative'>
        <a href="javascript:void(0)">
          <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
        </a>
        <div className='flex items-center max-lg:ml-auto lg:order-1'>
          {/* Menu icons and buttons */}
          <span className="relative">
            {/* Notification icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline" viewBox="0 0 64 64">
              <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">0</span>
          </span>
          {/* Other icons and buttons */}
          {/* ... */}
          <button id="toggle" className='lg:hidden ml-7' onClick={handleMenuToggle}>
            {/* Hamburger icon */}
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        {/* Collapsible menu */}
        <ul id="collapseMenu" className='lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-4 max-lg:my-4'>
          <li className='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)' className='hover:text-blue-600 text-[15px] font-bold text-blue-600 block'>Home</a></li>
          {/* Other menu items */}
          {/* ... */}
        </ul>
      </div>
    </header>
    </div>
  )
}

export default TestHeader