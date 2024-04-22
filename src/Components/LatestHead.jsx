import React, { useContext, useState } from "react";
import { Logo } from "./data";
import { Link } from "react-router-dom";
import IconContext from "../Context/IconContext";

const LatestHead = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const { setCartValue, cartValue, likeValue, cartItems, setCartItems } =
    useContext(IconContext);

    const [showRes, setShowRes] = useState(false)
    const toogleRes = () => {
      setShowRes(!showRes);
    }

  return (
    <div className="relative z-50 w-[100vw] h-[80px]">
      <header className="fixed top-0 flex bg-white border-b py-4 sm:px-10 px-6 font-[sans-serif] min-h-[80px] tracking-wide w-[100%]">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
          <Link to={"/"}>
            <img src={Logo} alt="logo" className="w-20" />
          </Link>

          {/* Hamburger icon for mobile */}
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-7 h-7 fill-current text-gray-600"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <ul
            className={`lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 items-center
                        transition-transform duration-500 ${
                          isMenuOpen
                            ? "block translate-x-0"
                            : "hidden translate-x-0"
                        }`}
          >
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to={"/"}
                className="text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to={"/avout"}
                className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
              >
                About
              </Link>
            </li>

            <li
              data-popover-target="menu"
              class="relative block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased"
              
            >
              <div
                role="button"
                class="flex w-full items-center gap-2 rounded-lg bg-blue-gray-50/50 p-3 py-2 pr-4 text-start font-medium leading-tight text-gray-900 outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                onClick={toogleRes}
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class={`hidden h-3 w-3 ${showRes ? 'rotate-180' : ''} transition-transform lg:block`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class={`block h-3 w-3 ${showRes ? 'rotate-180' : ''} transition-transform lg:hidden`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
                
              </div>
              {showRes && <div
class="absolute z-[999] lg:top-[50px] lg:left-[-100px] lg:w-[900px]  min-w-[180px] max-w-screen-xl overflow-auto rounded-xl border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500  shadow-lg shadow-blue-gray-500/10 focus:outline-none overflow-x-auto"
id=":r8:"
role="menu"
data-popover="menu"
data-popover-placement="bottom"
>
<ul
class="lg:grid lg:grid-cols-3 gap-y-2 outline-none outline-0 flex flex-col"
role="menuitem"
>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  Products
</h6>
<p class="block font-sans text-xs !font-medium text-blue-gray-500 antialiased">
  Find the perfect solution for your needs.
</p>
</div>
</button>
</a>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path
    fill-rule="evenodd"
    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
    clip-rule="evenodd"
  ></path>
  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  About Us
</h6>
<p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
  Meet and learn about our dedication
</p>
</div>
</button>
</a>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path
    fill-rule="evenodd"
    d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
    clip-rule="evenodd"
  ></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  Blog
</h6>
<p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
  Find the perfect solution for your needs.
</p>
</div>
</button>
</a>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  Services
</h6>
<p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
  Learn how we can help you achieve your goals.
</p>
</div>
</button>
</a>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path
    fill-rule="evenodd"
    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
    clip-rule="evenodd"
  ></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  Support
</h6>
<p class="block font-sans text-xs !font-medium text-blue-gray-500 antialiased">
  Reach out to us for assistance or inquiries
</p>
</div>
</button>
</a>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path
    fill-rule="evenodd"
    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
    clip-rule="evenodd"
  ></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  Contact
</h6>
<p class="block font-sans text-xs !font-medium text-blue-gray-500 antialiased">
  Find the perfect solution for your needs.
</p>
</div>
</button>
</a>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path
    fill-rule="evenodd"
    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
    clip-rule="evenodd"
  ></path>
  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z"></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  News
</h6>
<p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
  Read insightful articles, tips, and expert opinions.
</p>
</div>
</button>
</a>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path
    fill-rule="evenodd"
    d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
    clip-rule="evenodd"
  ></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  Products
</h6>
<p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
  Find the perfect solution for your needs.
</p>
</div>
</button>
</a>
<a href="#">
<button
role="menuitem"
class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
>
<div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
{" "}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  stroke-width="2"
  class="h-6 w-6 text-gray-900"
>
  <path
    fill-rule="evenodd"
    d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
    clip-rule="evenodd"
  ></path>
</svg>
</div>
<div>
<h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
  Special Offers
</h6>
<p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
  Explore limited-time deals and bundles
</p>
</div>
</button>
</a>
</ul>
</div>}
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to={"/contact"}
                className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
              >
                Contact
              </Link>
            </li>
            <Link to={"/Shop"} className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
              >
                Shop
              </a>
            </Link>
          </ul>
          

          <div className="ml-auto flex items-center space-x-6">
            <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent outline-none pr-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="cursor-pointer fill-gray-600"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
              </svg>
            </div>

            <div className="flex items-center space-x-8">
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="cursor-pointer fill-[#333] inline"
                  viewBox="0 0 64 64"
                >
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                </svg>
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-[#2e2d3d] px-1 py-0 text-xs text-white">
                  {likeValue}
                </span>
              </span>

              <Link to={"/cart"}>
                <span className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    className="cursor-pointer fill-[#333] inline"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" />
                  </svg>
                  <span className="absolute left-auto -ml-1 top-0 rounded-full bg-[#2e2d3d] px-1 py-0 text-xs text-white">
                    {cartValue}
                  </span>
                </span>
              </Link>

              <button className="px-5 py-2 text-sm rounded-full text-white border-2 border-transparent hover:border-[#757292] bg-[#2e2d3d] hover:bg-[#55537a]">
                Sign In
              </button>
            </div>
          </div>

          {/* Close button for mobile */}
          {isMenuOpen && (
            <button
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </button>
          )}
        </div>

      </header>
    </div>
  );
};

export default LatestHead;
