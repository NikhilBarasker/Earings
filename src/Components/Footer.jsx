import React from 'react'
import '../App.css';
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../Photoes/Footerimg.png";
import { Link } from 'react-router-dom';

import { face } from './data';

const Footer = () => {
  return (
    <div style={{ borderTop:'1px solid #c8c8c8'}}>
      <footer className="bg-whhite py-12 px-16 font-[sans-serif]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-black text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-black text-base transition-all"
                >
                  Contact US
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white text-base transition-all"
                >
                  Management Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-black text-lg font-bold mb-4">Follow Us</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-black text-base transition-all"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-black text-base transition-all"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-black text-base transition-all"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-black text-lg font-bold mb-4">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-black text-base transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-black text-base transition-all"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-black text-base transition-all"
                >
                  Vision & Mission
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:justify-center">
            <Link>
              <img
                src={Logo}
                alt="logo"
                className="w-60"
              />
            </Link>
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
          style={{color:'black'}}
          >
            <a href="">
              <AiOutlineYoutube className="media"/>
            </a>
            <a>
              {/* <CiFacebook className="media"/> */}
              <img src={face} title='facebook' alt="" style={{width:'25px', cursor:'pointer'}}/>
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