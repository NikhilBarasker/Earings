import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Logo from '../Photoes/Logo.png'

export default function Header() {
  return (
    <div>
      <div>
        <a href="javascript:void(0)" className="flex justify-center mt-[10px]">
          <img src={Logo} alt="logo" className="w-36" />
        </a>
        
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
                  // href="javascript:void(0)"
                  className="hover:text-[#007bff] text-[#007bff] font-bold text-sm block"
                >
                  Home
                </Link>
              </li>
              <li className="group text-[14px] max-lg:border-b max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Agencies
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
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          New York
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          San Francisco
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Houston
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Dallas
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Philadelphia
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          San Diego
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Atlanta
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Austin
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Portland
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Denver
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">UK</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          London
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Bristol
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Birmingham
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Liverpool
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Manchester
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Glasgow
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Edinburgh
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Leeds
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Leicester
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Sheffield
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">Canada</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Toronto
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Calgary
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Ottawa
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Vancouver
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Montréal
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Edmonton
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Winnipeg
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Halifax
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Victoria
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Windsor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Team
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  to="/contact"
                  // href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Contact
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Source
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Partner
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
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
