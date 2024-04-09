import React, { useState, useContext } from "react";
import "../App.css";
import "../Responsive.css"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Photoes/Logo.png";
import IconContext from "../Context/IconContext";

export default function Header4() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setCartValue, cartValue, likeValue, setlikeValue } =
    useContext(IconContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [show, setShow] = useState(false);
  const toogleLog = () => {
    setShow(!show);
  };

  let navigate = useNavigate();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <form className="px-4 w-full max-w-[330px] mt-[20px] search-form">
            <label
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              for="default-search"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
              <input
                required=""
                placeholder="Search"
                className="block w-full p-4 py-5 h-[60px] ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 search"
                id="default-search"
                type="search"
              />
              <button className="absolute end-2.5 ml-[8px] bottom-1/2 translate-y-1/2 p-4 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>
        <div>
          <Link to="/home" className="flex justify-center mt-[10px]">
            <img
              style={{ marginRight: "200px" }}
              src={Logo}
              alt="logo"
              className="w-36"
            />
          </Link>
        </div>
        <div>
          <div className="absolute sm:right-10 right-4 flex items-center mt-[25px]">
            <span className="relative sm:mr-8 mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block"
                viewBox="0 0 64 64"
              >
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"
                />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
                {likeValue}
              </span>
            </span>

            <Link to={"/cart"} onClick={handleLinkClick}>
              <span className="relative sm:mr-8 mr-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  className="cursor-pointer fill-[#3gray33] hover:fill-[blaack] inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
                  {cartValue}
                </span>
              </span>
            </Link>

            <div className="flex flex-col justify-center items-center cursor-pointer">
              <div className="relative font-[sans-serif] w-max mx-auto">
                <button
                  type="button"
                  onClick={toogleLog}
                  onBlur={toogleLog}
                  className="px-6 py-2 flex items-center rounded-full text-[#333] text-sm font-semibold border-2 border-gray-300 outline-none hover:bg-gray-100"
                >
                  <Link style={{ cursor: "pointer" }} to="/login">
                    Log In
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-[#333] inline ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clip-rule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                {show && (
                  <ul className="absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto">
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
              </div>
              {/* <span className="text-xs font-semibold mt-1">Profile</span> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <header className="border-b border-1 bg-white font-sans min-h-[60px] mb-[-120px]">
          <div className="flex flex-wrap items-center justify-center gap-6 px-10 py-3 relative">
            <div className="flex items-center ml-auto lg:hidden lg:order-1">
              <button id="toggle" className="ml-7">
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <ul
              id="collapseMenu"
              className="lg:!flex max-lg:hidden max-lg:w-full lg:ml-10 lg:space-x-10 max-lg:space-y-3"
            >
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  to="/"
                  className="hover:text-[#007bff] text-[#007bff] font-bold text-sm block"
                >
                  Home
                </Link>
              </li>
              <li className="group text-[14px] max-lg:border-b max-lg:py-2 relative">
                <a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block">
                  <div style={{ backgroundColor: "pink" }}>Agencies</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute hidden group-hover:flex shadow-lg bg-white px-8 pb-8 pt-6 lg:top-5 max-lg:top-8 -left-6 z-50">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">USA</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          New York
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          San Francisco
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Houston
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Dallas
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Philadelphia
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          San Diego
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Atlanta
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Austin
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Portland
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Denver
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">UK</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          London
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Bristol
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Birmingham
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Liverpool
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Manchester
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Glasgow
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Edinburgh
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Leeds
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Leicester
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Sheffield
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Canada
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Toronto
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Calgary
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Ottawa
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Vancouver
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Montréal
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Edmonton
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Winnipeg
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Halifax
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Victoria
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Windsor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block">
                  Team
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  to="/contact"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Contact
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block">
                  Source
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block">
                  Partner
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block">
                  Feature
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
