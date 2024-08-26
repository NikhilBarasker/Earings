import React, { useContext, useState } from "react";
import { Logo } from "./data";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import "../Responsive.css";
import IconContext from "../Context/IconContext";
import { FaSearch, FaPowerOff, FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import ChatBoxLogo from "./ChatBoxLogo";

const LatestHead = () => {
  const location = useLocation();
  let navigate = useNavigate();

  const handleWishList = () => {
    navigate("/wishlist");
    setShowRes(false);
    setIsInputVisible(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

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
    setIsInputVisible(false);
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  const handleProfile = () => {
    setProfileDropDown(true);
  };

  const handleProfileL = () => {
    setProfileDropDown(false);
    setIsInputVisible(false);
  };

  const handleSearchClick = () => {
    setIsInputVisible(!isInputVisible);
    setShowRes(false);
  };

  const category = [
    { name: "Earrings", path: "/Categories/Earrings" },
    { name: "Rings", path: "/Categories/Rings" },
    { name: "Key Chains", path: "/Categories/KeyChain" },
    { name: "Wallet", path: "/Categories/Wallets" },
    { name: "Caps", path: "/Categories/Caps" },
    { name: "Goggles", path: "/Categories/Goggles" },
    { name: "Bracelets", path: "/Categories/Bracelets" },
    { name: "Watch", path: "/Categories/Watches" },
    { name: "Special Offers", path: "/Categories/Offers" },
  ];

  return (
    <div className="relative z-50 w-[100vw] h-[80px] navbar">
      <header
        onMouseLeave={handleProfileL}
        className="fixed top-0 flex flex-col bg-white border-b py-4 sm:px-10 px-6 font-[sans-serif] min-h-[80px] tracking-wide w-[100%] navbar"
      >
        <div className="flex flex-wrap  items-center lg:gap-y-2 gap-4 w-full">
          <span className="flex flex-row-reverse ml-[50px] logoMenu">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="logo"
                className="w-16"
                onClick={() => {
                  setShowRes(false);
                  setIsInputVisible(false);
                }}
              />
            </Link>
            <button
              className="lg:hidden ml-[-50px] mr-[20px] mb-[15px]"
              onClick={toggleMenu}
            >
              <FaBars className="w-7 h-7 text-gray-600" />
            </button>
          </span>

          {/* Hamburger Menu Content */}
          <ul
            className={`lg:hidden max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto items-center
                        transition-transform duration-500 ${
                          isMenuOpen ? "block translate-x-0" : "hidden"
                        } humburger`}
          >
            {category.map((item) => (
              <li key={item.name} className="max-lg:border-b max-lg:py-3">
                <Link
                  to={item.path}
                  onClick={() => {
                    closeMenu();
                    setShowRes(false);
                    setIsInputVisible(false);
                  }}
                  className={`hover:text-[#007bff] text-[15px] block font-semibold ${
                    location.pathname === item.path
                      ? "text-[#007bff]"
                      : "text-[#333]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center space-x-6">
            <div className="flex items-center space-x-8 secondNav">
              <div className="relative">
                <button
                  className="flex items-center justify-center mr-[-10px] mt-[-10px] w-[40px] h-[40px] rounded-full focus:outline-none "
                  onClick={handleSearchClick}
                >
                  <FaSearch className="w-[20px] h-[20px] text-gray-600 mt-[10px] mr-[-20px]" />
                </button>
                {isInputVisible && (
                  <input
                    type="text"
                    placeholder="Search something..."
                    className="absolute top-full left-0 z-10 w-[200px] bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none"
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                  />
                )}
              </div>
              <span onClick={() => handleWishList()} className="relative">
                <CiHeart className="w-7 h-7 cursor-pointer text-[#333]" />
                <span className="absolute left-auto ml-4 top-0 rounded-full bg-[#2e2d3d] px-1 py-0 text-xs text-white">
                  {likeValue}
                </span>
              </span>

              <Link to={"/cart"}>
                <span
                  className="relative"
                  onClick={() => {
                    setShowRes(false);
                    setIsInputVisible(false);
                  }}
                >
                  <IoCartOutline className="w-7 h-7 cursor-pointer text-[#333]" />
                  <span className="absolute left-auto ml-4 top-0 rounded-full bg-[#2e2d3d] px-1 py-0 text-xs text-white">
                    {cartValue}
                  </span>
                </span>
              </Link>

              <div className="relative inline-block">
                <button
                  onMouseEnter={handleProfile}
                  onClick={() => {
                    setShowRes(false);
                    setIsInputVisible(false);
                  }}
                >
                  <CgProfile className="mt-[10px] w-[22px] h-[22px]" />
                </button>

                {profileDropDown && (
                  <ul
                    onMouseEnter={handleProfile}
                    onMouseLeave={handleProfileL}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-[1000] ml-[-60px]"
                  >
                    <li className="flex flex-row px-4 py-2 hover:bg-gray-100">
                      <MdOutlineLogin className="w-[25px] ml-[-6px] mr-[5px]" />
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
        {/* Desktop View Category Links */}
        <div className="hidden lg:flex mt-10 ml-[50px] gap-9 font-bold">
          {category.map((item) => (
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
      </header>
      <ChatBoxLogo />
    </div>
  );
};

export default LatestHead;
