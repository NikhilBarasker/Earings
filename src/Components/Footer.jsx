import React from 'react'
import '../App.css';
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 py-12 px-16 font-[sans-serif]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Contact US
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Quality Assurance
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Management Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Follow Us</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Company</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Vision & Mission
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:justify-center">
            <a href="javascript:void(0)">
              <img
                src="https://readymadeui.com/readymadeui-light.svg"
                alt="logo"
                className="w-60"
              />
            </a>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between sm:flex-row">
          <p className="text-gray-400 text-sm sm:order-1">
            © 2024
            <a
              href="https://readymadeui.com/"
              target="_blank"
              className="hover:underline mx-1"
            >
              Earings
            </a>
            All Rights Reserved.
          </p>
          <div className="flex space-x-5 max-sm:mt-4"
          style={{color:'white'}}
          >
            <a href="">
              <AiOutlineYoutube className="media"/>
            </a>
            <a>
              <CiFacebook className="media"/>
            </a>
            <a href="https://www.instagram.com/maheshpatangwala/">
              <CiInstagram className="media"/>
            </a>
            <a>
              <FaLinkedin className="media"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer