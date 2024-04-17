import React, { useState } from 'react'
import { Logo } from './data';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const TestHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if(isOpen){
      setIsOpen(false)
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isFocused, setIsFocused] = useState(false);

  const [show, setShow] = useState(false);
  const toogleLog = () => {
    setShow(!show);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuP = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='' style={{position:'fixed', top:'0', zIndex:'999', width:'100%'}}>
       <nav aria-label="Site Navbar">
      {/* Top Navigation */}
      <div className="border-b bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-3">
          <div className="flex items-center justify-between gap-x-4">
            {/* Left Links */}
            <ul className="flex items-center gap-x-3">
              <li className="hidden sm:block">
                <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-900/70">maheshpatangwala@gmail.com</Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-900/70">+91 9834583306</Link>
              </li>
              {/* <li>
                <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-900/70">Blogs</Link>
              </li> */}
            </ul>
            {/* Right Icons */}
            <ul className="flex items-center gap-x-3">
              {/* Icon 1 */}
              <li>
                <Link className="text-gray-900 hover:text-gray-900/70">
                <div
              className=" bg-gray-100 flex px-4 py-1 rounded max-lg:hidden"
              style={
                isFocused
                  ? { border: "1px solid gray" }
                  : { border: "1px solid #e5e7eb" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="20px"
                // onClick={handleClick}
                onBlur={toggleMenuP}
                className="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="text"
                id="search"
                placeholder="Search..."
                className="outline-none bg-transparent w-full text-sm"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
                {/* <Search>
                  <div className="container">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    onClick={handleCheckboxChange}
                  />
                  <div className="mainbox" style={isChecked ? { width: '230px' } : { width: '50px' }}>
                    <div className="iconContainer" style={isChecked ? { paddingRight: '8px' } : {}}>
                      <svg
                        viewBox="0 0 512 512"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        className="search_icon"
                      >
                        <path
                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      className="search_input"
                      placeholder="search"
                      type="text"
                      style={isChecked ? { width: '170px' } : { width: '0', height: '0' }}
                    />
                  </div>
                </div>
                </Search> */}
                </Link>
              </li>
              {/* Icon 2 */}
              <li onMouseEnter={toogleLog}>
                <Link href="#" className="text-gray-900 hover:text-gray-900/70" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
              {show && (
                    <ul className="absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto top-[50px] " onMouseLeave={toogleLog}>
                      <li className="py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-[18px] h-[18px] mr-3"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        View profile
                      </li>
                      <li className="py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-[18px] h-[18px] mr-3"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                            data-original="#000000"
                          ></path>
                        </svg>
                        Dashboard
                      </li>
                      <li className="py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-[18px] h-[18px] mr-3"
                          viewBox="0 0 6.35 6.35"
                        >
                          <path
                            d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        Logout
                      </li>
                    </ul>
                  )}
              </li>
              {/* Icon 3 */}
              <li>
                <Link to={'/cart'} onClick={handleLinkClick} className="text-gray-900 hover:text-gray-900/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        {/* Bottom Navigation */}
        <div className="mx-auto max-w-screen-xl px-4 py-4">
          <div className="flex items-center justify-between gap-x-8">
            {/* Logo */}
            <Link to={'/'} onClick={handleLinkClick} className="flex items-center gap-x-1">
              <img src={Logo} alt="logo" width="80" height="80" className="object-cover" />
              {/* <span className="text-lg font-black text-gray-900">CODES</span> */}
            </Link>
            {/* Main Links */}
            <ul className="flex items-center gap-x-6">
              <li className="hidden md:block">
                <Link to={'/'} onClick={handleLinkClick} className="text-sm font-medium text-gray-900 hover:text-gray-900/70">Home</Link>
              </li>
              <li className="relative hidden md:block">
                <Link className="text-sm font-medium text-gray-900 hover:text-gray-900/70">
                
                <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md "
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={()=>{setIsOpen(!isOpen)}}
        >
          Products
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
          <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">
              Ear Rings
            </Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">
              Bracellets
            </Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">
              Nose Rings
            </Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">
              Wallets
            </Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">
              Watches
            </Link>
          </div>
        </div>
      )}
                
                
                </Link>
              </li>
              <li className="hidden md:block">
                <Link onClick={handleLinkClick} className="text-sm font-medium text-gray-900 hover:text-gray-900/70">Service</Link>
              </li>
              <li className="hidden md:block">
                <Link to={'/contact'} onClick={handleLinkClick}  className="text-sm font-medium text-gray-900 hover:text-gray-900/70">Contacts</Link>
              </li>
              {/* Mobile Menu Button */}
              <li className="flex items-center gap-x-4 md:hidden">
                <button onClick={toggleMenu} className="p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        <div className={`duration-900 ${isMenuOpen ? 'h-auto' : 'h-0'} overflow-y-hidden transition-all md:hidden`}>
          <hr />
          <ul className="mx-auto max-w-screen-xl px-4 py-4">
            <li>
              <Link href="#" onClick={handleLinkClick} className="block rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">HOME</Link>
            </li>
            <li>
              <Link href="#" onClick={handleLinkClick} className="block rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">
              <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md "
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleMenuP}
        >
          Products
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          style={{}}
        >
          <div className="py-1" role="none">
            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">
              Ear Rings
            </Link>
            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">
              Bracellets
            </Link>
            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">
              Nose Rings
            </Link>
            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">
              Wallets
            </Link>
            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">
              Watches
            </Link>
          </div>
        </div>
      )}
              
              </Link>
            </li>
            <li>
              <Link href="#" onClick={handleLinkClick} className="block rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">SERVICE</Link>
            </li>
            <li>
              <Link href="#" onClick={handleLinkClick} className="block rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">CONTACTS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default TestHeader


const Search = styled.div `
.container {
  position: relative;
  box-sizing: border-box;
  width: fit-content;
}

.mainbox {
  box-sizing: border-box;
  position: relative;
  width: 230px;
  height: 40px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  border-radius: 160px;
  background-color: rgb(0, 0, 0);
  transition: all 0.3s ease;
}

.checkbox:focus {
  border: none;
  outline: none;
}

.checkbox:checked {
  right: 10px;
}

.checkbox:checked ~ .mainbox {
  width: 50px;
}

.checkbox:checked ~ .mainbox .search_input {
  width: 0;
  height: 0px;
}

.checkbox:checked ~ .mainbox .iconContainer {
  padding-right: 8px;
}

.checkbox {
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 17px;
  top: 10px;
  z-index: 9;
  cursor: pointer;
  appearance: none;
}

.search_input {
  box-sizing: border-box;
  height: 100%;
  width: 170px;
  background-color: transparent;
  border: none;
  outline: none;
  padding-bottom: 4px;
  padding-left: 10px;
  font-size: 1em;
  color: white;
  transition: all 0.3s ease;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.search_input::placeholder {
  color: rgba(255, 255, 255, 0.776);
}

.iconContainer {
  box-sizing: border-box;
  padding-top: 5px;
  width: fit-content;
  transition: all 0.3s ease;
}

.search_icon {
  box-sizing: border-box;
  fill: white;
  font-size: 1.3em;
}
`;