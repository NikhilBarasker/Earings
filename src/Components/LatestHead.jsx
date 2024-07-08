import React, { useContext, useState } from "react";
import { Logo } from "./data";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import "../Responsive.css";
import IconContext from "../Context/IconContext";
import { GiHeartEarrings } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";
import { GiChainedArrowHeads } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { GiBilledCap } from "react-icons/gi";
import { PiGogglesThin } from "react-icons/pi";
import { TbBrandTorchain } from "react-icons/tb";
import { BsSmartwatch } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import ChatBoxLogo from "./ChatBoxLogo";
import { CgProfile } from "react-icons/cg";
import { FaPowerOff } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const LatestHead = () => {
  const location = useLocation();
  // console.log("Location : ", location.pathname)
  let navigate = useNavigate();

  const handleWishList = () => {
    navigate("/wishlist");
    setShowRes(false)
    setIsInputVisible(false)
    // alert(`It's working`)
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    };
  const { setCartValue, cartValue, likeValue, cartItems, setCartItems } =
    useContext(IconContext);

  const [showRes, setShowRes] = useState(false);
  const toogleRes = () => {
    setShowRes(!showRes);
    setIsInputVisible(false)
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  const handleProfile = () => {
    setProfileDropDown(true)
  }
  const handleProfileL = () => {
    setProfileDropDown(false);
    setIsInputVisible(false);
    // setShowRes(false)
  }

  
    const [isInputVisible, setIsInputVisible] = useState(false);

    const handleSearchClick = () => {
      setIsInputVisible(!isInputVisible);
      setShowRes(false)
    
    };
  

  return (
    <div className="relative z-50 w-[100vw] h-[80px] navbar" >
      <header onMouseLeave={handleProfileL}  className="fixed top-0 flex bg-white border-b py-4 sm:px-10 px-6 font-[sans-serif] min-h-[80px] tracking-wide w-[100%] navbar">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
          <span className="flex flex-row-reverse logoMenu">
            <Link to={"/"}>
              <img src={Logo} alt="logo" className="w-16" onClick={()=>{setShowRes(false); setIsInputVisible(false)}} />
            </Link>

            <button
              className="lg:hidden ml-[150px] mr-[10px]  mb-[15px]"
              onClick={toggleMenu}
            >
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
          </span>

          <ul
            className={`lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto items-center
                        transition-transform duration-500 ${
                          isMenuOpen
                            ? "block translate-x-0"
                            : "hidden translate-x-0"
                        } humburger`}
          >
            <li className="max-lg:border-b max-lg:py-3 px-3 mt-[10px] mb-[10px]">
              <Link
                to={"/"}
                onClick={()=>{setShowRes(false) ; setIsInputVisible(false)}}
                className={` hover:text-[#007bff] text-[15px] block font-semibold ${location.pathname === "/" ? ("text-[#007bff]") : ("text-[#333]")}`}
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3 mt-[10px] mb-[10px]">
              <Link
                to={"/about"}
                onClick={()=>{setShowRes(false) ; setIsInputVisible(false)}}
                className={` hover:text-[#007bff] text-[15px] block font-semibold ${location.pathname === "/about" ? ("text-[#007bff]") : ("text-[#333]")}`}
              >
                About
              </Link>
            </li>
            <li
              data-popover-target="menu"
              className="relative block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased mt-[10px] mb-[10px]"
            >
              <div
                role="button"
                className={`flex w-full items-center gap-2 rounded-lg p-3 py-2 pr-4 text-start font-medium leading-tight ${(location.pathname === "/Categories/Earrings" || location.pathname === "/Categories/Rings" || location.pathname === "/Categories/KeyChain"|| location.pathname === "/Categories/Wallets"|| location.pathname === "/Categories/Caps"|| location.pathname === "/Categories/Goggles"|| location.pathname === "/Categories/Bracelets"|| location.pathname === "/Categories/Watches"|| location.pathname === "/Categories/Offers") ? ("text-[#007bff]") : ("text-[#333]")} outline-none transition-all hover:bg-opacity-80 hover:text-[#007bff]  focus:bg-opacity-80 focus:text-blue-gray-900  active:bg-opacity-80 active:text-blue-gray-900 productNav`}
                onClick={toogleRes}
                
              >
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className={`hidden h-3 w-3 ${
                    showRes ? "rotate-180" : ""
                  } transition-transform lg:block`}
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
                  className={`block h-3 w-3 ${
                    showRes ? "rotate-180" : ""
                  } transition-transform lg:hidden`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </div>
              {showRes && (
                <div
                  className="absolute z-[999] lg:top-[50px] lg:left-[-100px] lg:w-[900px]  min-w-[180px] max-w-screen-xl overflow-auto rounded-xl border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500  shadow-lg shadow-blue-gray-500/10 focus:outline-none overflow-x-auto productDropdown"
                  id=":r8:"
                  role="menu"
                  data-popover="menu"
                  data-popover-placement="bottom"
                >
                  <ul
                    className="lg:grid lg:grid-cols-3 gap-y-2 outline-none outline-0 flex flex-col"
                    role="menuitem"
                  >
                    <Link
                      onClick={() => {handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/Earrings"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                          {" "}
                          <GiHeartEarrings className="avtar" />
                        </div>
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Earrings
                          </h6>
                        </div>
                      </button>
                    </Link>
                    <Link
                      onClick={() =>{ handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/Rings"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                          {" "}
                          <LiaRingSolid className="avtar" />
                        </div>
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Rings
                          </h6>
                        </div>
                      </button>
                    </Link>
                    <Link
                      onClick={() => {handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/KeyChain"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                          {" "}
                          <GiChainedArrowHeads className="avtar" />
                        </div>
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Keychains
                          </h6>
                        </div>
                      </button>
                    </Link>
                    <Link
                      onClick={() => {handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/Wallets"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <FaWallet className="avtar" />
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Wallet
                          </h6>
                        </div>
                      </button>
                    </Link>
                    <Link
                      onClick={() => {handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/Caps"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <GiBilledCap className="avtar" />
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Caps
                          </h6>
                        </div>
                      </button>
                    </Link>
                    <Link
                      onClick={() => {handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/Goggles"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <PiGogglesThin className="avtar" />
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Goggles
                          </h6>
                        </div>
                      </button>
                    </Link>
                    <Link
                      onClick={() => {handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/Bracelets"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <TbBrandTorchain className="avtar" />
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Breslates
                          </h6>
                        </div>
                      </button>
                    </Link>
                    <Link
                      onClick={() => {handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/Watches"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <BsSmartwatch className="avtar" />
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Smart Watches
                          </h6>
                        </div>
                      </button>
                    </Link>
                    <Link
                      onClick={() => {handleNavLinkClick(); setShowRes(false)}}
                      to="/Categories/Offers"
                    >
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <MdLocalOffer className="avtar" />
                        <div>
                          <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                            Special Offers
                          </h6>
                        </div>
                      </button>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3 mt-[10px] mb-[10px]">
              <Link
                to={"/contact"}
                onClick={()=>{setShowRes(false) ; setIsInputVisible(false)}}
                className={` hover:text-[#007bff] text-[15px] block font-semibold ${location.pathname === "/contact" ? ("text-[#007bff]") : ("text-[#333]")}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="ml-auto flex items-center space-x-6" >
            <div className="flex items-center space-x-8 secondNav" >
              <div className="relative">
                <button
                  className="flex items-center justify-center mr-[-10px]  mt-[-10px] w-[40px] h-[40px] rounded-full focus:outline-none "
                  onClick={handleSearchClick}
                >
                  <FaSearch
                    style={{
                      color: "black",
                    }}
                    className="w-[20px] h-[20px] text-gray-600 mt-[10px] mr-[-20px]"
                  />
                </button>
                {/* Input field */}
                {isInputVisible && (
                  <input
                    type="text"
                    placeholder="Search something..."
                    className="absolute top-full left-0 z-10 w-[200px] bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none"
                  />
                )}
              </div>
              <span onClick={() => handleWishList()} className="relative">
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
                <span className="relative"                   
                onClick={()=>{setShowRes(false) ; setIsInputVisible(false)}}
                >
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

              <div className="relative inline-block" >
                <button
                  onMouseEnter={handleProfile}
                onClick={()=>{setShowRes(false) ; setIsInputVisible(false)}}
                 // onMouseLeave={handleProfileL} is removed from here , and i have put it in line no 71
                >
                  <CgProfile className=" mt-[10px] w-[22px] h-[22px]" />
                </button>
                
                {profileDropDown && (
                  <ul
                    onMouseEnter={handleProfile}
                    onMouseLeave={handleProfileL}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-[1000] ml-[-60px]"
                  >
                    <li className="flex flex-row px-4 py-2 hover:bg-gray-100">
                      <MdOutlineLogin className="w-[25px]  ml-[-6px] mr-[5px]" />
                      <Link to="/profile">My Profile</Link>
                    </li>
                    <li className="flex flex-row px-4 py-2 hover:bg-gray-100">
                      <FaPowerOff className="mt-[4px] mr-[5px]" />
                      <Link>Logout</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <ChatBoxLogo />
    </div>
  );
};

export default LatestHead;
