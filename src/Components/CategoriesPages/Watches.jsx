import React, { useState } from "react";
import HeaderImageSec from "./HeaderImageSec";

import { backgroundImage1 } from "../data";
import { CategoryProducts } from "../data";
import Productcard2 from "./Productcard2";

const Watches = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = (product) => {
    setIsLiked(!isLiked);
    setSelectedId(product.id);
  };
  const [selectedId, setSelectedId] = useState();
  return (
    <div>
      <HeaderImageSec img={backgroundImage1} categ={"Watches"} />

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between align-middle w-[100%]">
          
          <div className="w-[auto]">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Premium Watches
          </h2>
          </div>

          <div>
<div class=" flex justify-between align-middle">
  <details
    class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
    >
      <span class="text-sm font-medium"> Availability </span>

      <span class="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </summary>

    <div class="border-t border-gray-200 bg-white">
      <header class="flex items-center justify-between p-4">
        <span class="text-sm text-gray-700"> 0 Selected </span>

        <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
          Reset
        </button>
      </header>

      <ul class="space-y-1 border-t border-gray-200 p-4">
        <li>
          <label for="FilterInStock" class="inline-flex items-center gap-2">
            <input type="checkbox" id="FilterInStock" class="size-5 rounded border-gray-300" />

            <span class="text-sm font-medium text-gray-700"> In Stock (5+) </span>
          </label>
        </li>

        <li>
          <label for="FilterPreOrder" class="inline-flex items-center gap-2">
            <input type="checkbox" id="FilterPreOrder" class="size-5 rounded border-gray-300" />

            <span class="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
          </label>
        </li>

        <li>
          <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
            <input type="checkbox" id="FilterOutOfStock" class="size-5 rounded border-gray-300" />

            <span class="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
          </label>
        </li>
      </ul>
    </div>
  </details>

  <details
    class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
    >
      <span class="text-sm font-medium"> Price </span>

      <span class="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </summary>

    <div class="border-t border-gray-200 bg-white">
      <header class="flex items-center justify-between p-4">
        <span class="text-sm text-gray-700"> The highest price is $600 </span>

        <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
          Reset
        </button>
      </header>

      <div class="border-t border-gray-200 p-4">
        <div class="flex justify-between gap-4">
          <label for="FilterPriceFrom" class="flex items-center gap-2">
            <span class="text-sm text-gray-600">$</span>

            <input
              type="number"
              id="FilterPriceFrom"
              placeholder="From"
              class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </label>

          <label for="FilterPriceTo" class="flex items-center gap-2">
            <span class="text-sm text-gray-600">$</span>

            <input
              type="number"
              id="FilterPriceTo"
              placeholder="To"
              class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </label>
        </div>
      </div>
    </div>
  </details>
</div>
          </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Cards */}
            {CategoryProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
              >
                <div
                  className={`bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4 cursor-pointer 
          ${
            isLiked
              ? "transform scale-105"
              : "transform scale-100 hover:scale-110"
          }`}
                  onClick={()=>{handleLikeToggle(product)}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    onClick={() => setSelectedId(product.id)}
                    className={`fill-current ${
                      selectedId === product.id
                        ? "text-red-500"
                        : "text-gray-800"
                    } inline-block`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
  fill={selectedId === product.id ? "red" : "none"}
                  >
                    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
                  </svg>
                </div>
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {product.description}
                  </p>
                  <h4 className="text-lg text-gray-700 font-bold mt-4">{`Rs.${product.price}`}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
