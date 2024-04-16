import React from "react";
import "../App.css";
import ProductEarringBG from "../Photoes/ProductEarringBG.jpg";
export default function Product1() {

  let product = [
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
  ];

  return (
    <div className="relative mt-[120px]  font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0  before:opacity-50 before:z-10 h-[300px]">
      <div className="relative h-[300px] text-center flex justify-center text-white">
        <img
          src={ProductEarringBG}
          alt="Banner Image"
          className="inset-0 w-full h-full object-cover"
        />
        <h2 className="md:text-8xl text-3xl font-bold mb-8 absolute top-[40%]">
          Earrings
          {/* <span className="text-yellow-500 md:text-5xl text-3xl font-bold mb-8">
              WPHF
            </span> */}
        </h2>
                
      </div>
      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Premium Sneakers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              {const productElements = products.map((product, index) => (
  <div key={index} className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
    <img
      src={product.img1}
      alt={product.h3}
      className="h-full w-full object-contain"
    />
    <div>
      <h3 className="text-lg font-bold text-gray-800">
        {product.h3}
      </h3>
      <p className="text-gray-500 text-sm mt-2">
        {product.p}
      </p>
      <h4 className="text-lg text-gray-700 font-bold mt-4">
        {product.h4}
      </h4>
    </div>
  </div>
))}
            
              
              {/* <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product9.webp"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  SoleStride Elegance
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-gray-700 font-bold mt-4">$10</h4>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product10.webp"
                  alt="Product 2"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  UrbanTrail Sneakers
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-gray-700 font-bold mt-4">$12</h4>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product11.webp"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  VelvetGlide Boots
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-gray-700 font-bold mt-4">$14</h4>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product12.webp"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  SummitPeak Hiking
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-gray-700 font-bold mt-4">$12</h4>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product13.webp"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">ZenithGlow</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-gray-700 font-bold mt-4">$15</h4>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product14.webp"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">EchoElegance</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-gray-700 font-bold mt-4">$14</h4>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 cursor-pointer    hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="w-11/12 h-[220px] overflow-hidden mx-auto 
                 aspect-w-16  aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product15.webp"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Pumps</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-gray-700 font-bold mt-4">$14</h4>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product10.webp"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  BlazeBurst Sports
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-gray-700 font-bold mt-4">$14</h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
