import React from "react";
import "../App.css";
import ProductEarringBG from "../Photoes/ProductEarringBG.jpg";
export default function Earings() {
  let product = [
    {
      img1: "https://readymadeui.com/images/product9.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product10.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product11.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product12.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product13.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product14.webp",
      h3: "SoleStride Elegance",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      h4: "$10",
    },
    {
      img1: "https://readymadeui.com/images/product15.webp",
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
    <div>
      <div className=" mt-[130px] relative h-[300px] text-center flex justify-center text-white">
        <img
          src={ProductEarringBG}
          alt="Banner Image"
          className="inset-0 w-full h-full object-cover"
        />
        <h2 className="md:text-8xl text-3xl font-bold mb-8 absolute top-[40%]">
          Earrings
        </h2>
      </div>
      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Premium Sneakers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
              >
                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.5 18.5 0 0 0 45.5 4zM32 49.24c-12.68-9.06-28-22.4-28-26.74a12.5 12.5 0 0 1 25 0c0 4.33-15.32 17.68-28 26.74zM47 19a4 4 0 0 1-4-4 1 1 0 0 0-1-1H22a1 1 0 0 0-1 1 4 4 0 0 1-4 4 3.9 3.9 0 0 1-3.9-3.9V9a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v5.1a3.9 3.9 0 0 1-3.9 3.9z"
                      fill="#f1c3c3"
                    />
                  </svg>
                </div>
                <img src={item.img1} alt="" className="w-full" />
                <h3 className="text-lg font-semibold mt-4">{item.h3}</h3>
                <p className="text-gray-500 text-sm mt-4">{item.p}</p>
                <h4 className="font-bold text-lg pb-1">{item.h4}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
