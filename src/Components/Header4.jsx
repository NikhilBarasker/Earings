import React, { useState } from "react";
import "../App.css";
// import "../Responsive.css"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Photoes/Logo.png";
import { useContext } from "react";
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

  // const handleClick = () => {
  //   let data = document.getElementById("search").value;

  //   let url = data.trim().toLowerCase();

  //   if (url === "home" || url === "/") {
  //     navigate("/");
  //   } else if (url === "/about") {
  //     navigate("/about");
  //   } else if (url === "/contact") {
  //     navigate("/contact");
  //   } else {
  //     navigate("/error");
  //   }

  //   document.getElementById("search").value = "";
  // };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div
        className="w-[100%] h-auto search-form"
        style={{
          position: "fixed",
          zIndex: "1000",
          top: "0",
          boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.5)",
        }}
      >
        <header className="shadow-md bg-white font-[sans-serif]">
          <section className="flex items-center lg:justify-center relative py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
            <div
              className="left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden"
              style={
                isFocused
                  ? { border: "1px solid gray" }
                  : { border: "1px solid transparent" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="20px"
                // onClick={handleClick}
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
            <Link to={"/"}>
              <img
                src={Logo}
                alt="logo"
                className="md:w-[auto] w-20 ml-[20px] logo"
              />
            </Link>
            <div className="absolute sm:right-10 right-4 flex items-center">
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
                  1
                </span>
              </span>
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
                    <Link to={"/login"}>Log In</Link>
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
          </section>
          <div className="flex flex-wrap justify-center px-10 py-3 relative">
            <div
              id="toggle"
              className="flex ml-auto lg:order-1 lg:hidden relative z-50"
            >
              <button
                className="ml-7 btn"
                onClick={toggleMenu}
                onBlur={toggleMenu}
              >
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
              style={{ display: menuOpen ? "block" : "none" }}
              className={`lg:!flex lg:space-x-10 max-lg:space-y-3 max-lg:hidden max-lg:w-full max-lg:my-4 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <li
                className="max-lg:border-b border-2 border-blue-500 max-lg:py-2"
                onClick={() => navigate("/")}
              >
                <Link
                  to={"/"}
                  activeClassName="active"
                  className="hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li className="group max-lg:border-b max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                >
                  Store
                </a>
                <ul className="absolute hidden group-hover:block shadow-lg bg-white space-y-2 px-6 pb-4 pt-6 lg:top-5 max-lg:top-8 left-0 min-w-[250px] z-50">
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Furniture Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Electronic Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Fashion Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Shoes Store
                    </a>
                  </li>
                  <li className="max-lg:border-b max-lg:py-2">
                    <Link
                      to={"/about"}
                      onClick={handleLinkClick}
                      activeClassName="active"
                      className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      About
                    </Link>
                  </li>
                  <li className="max-lg:border-b max-lg:py-2">
                    <Link
                      to={"/contact"}
                      onClick={handleLinkClick}
                      activeClassName="active"
                      className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  to={"/about"}
                  onClick={handleLinkClick}
                  activeClassName="active"
                  className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
                >
                  About
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  to={"/contact"}
                  onClick={handleLinkClick}
                  activeClassName="active"
                  className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
