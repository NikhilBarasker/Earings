import React, { useState } from 'react';
import Filters from './EarRings';
import { CategoryProducts } from '../data';

const EarRings_Content = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = CategoryProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleLikeToggle = (productId) => {
    setIsLiked(!isLiked);
    setSelectedId(productId);
  };

  const totalPages = Math.ceil(CategoryProducts.length / productsPerPage);

  // Handle pagination function
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Product Cards */}
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
            >
              <div
                className={`bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4 cursor-pointer 
                  ${
                    isLiked
                      ? 'transform scale-105'
                      : 'transform scale-100 hover:scale-110'
                  }`}
                onClick={() => {
                  handleLikeToggle(product.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  onClick={() => setSelectedId(product.id)}
                  className={`fill-current ${
                    selectedId === product.id
                      ? 'text-red-500'
                      : 'text-gray-800'
                  } inline-block`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill={selectedId === product.id ? 'red' : 'none'}
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
        {/* Pagination */}
        <div className="flex justify-center mt-7 items-center gap-4">
      {/* Previous Button */}
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => handlePaginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {/* SVG for Previous Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
    </svg>
    Previous
      </button>

      {/* Page Buttons */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg ${
              currentPage === index + 1
                ? 'bg-gray-900 text-white shadow-md shadow-gray-900/10'
                : 'text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20'
            } font-sans text-xs font-medium uppercase transition-all`}
            type="button"
            onClick={() => handlePaginate(index + 1)}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => handlePaginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {/* SVG for Next Icon */}
        Next
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
    </svg>
    
      </button>
    </div>
      </div>
    </div>
  );
};

export default EarRings_Content;
