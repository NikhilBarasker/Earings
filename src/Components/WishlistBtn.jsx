import React, { useEffect, useState } from "react";
import { useContext } from "react";
import IconContext from "../Context/IconContext";

const WishlistBtn = ({ product }) => {
  const item = product.product;
  // console.log("ITEM", product.product.productName)
  const { likeValue, setlikeValue, setWishItems, wishItems } = useContext(IconContext);
  
  const handleIncrement = () => {
    alert(`Product ${item.productName} added to Wishlist!`);
    const updatedWishItems = [...wishItems, product];
    console.log("Updated", updatedWishItems);
    setWishItems(updatedWishItems);
    setIsOn((prevState) => !prevState);
    if (isOn) {
      setlikeValue(likeValue - 1);
    } else {
      setlikeValue(likeValue + 1);
    }
  };
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prevState) => !prevState);
  };

  const isOpen  = wishItems.find((ab)=> ab.product.productName === product.product.productName) 
  // console.log("is", isOpen)

  return (
    <div>
      {/* {wishItems.find((product)=>{ */}
        <button
        onClick={handleIncrement}
        disabled={isOpen  ? true : false}
        className="text-center absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
      >
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isOpen ? "red" : "none"}
          viewBox="0 0 22 22"
          stroke="currentColor"
          className="h-4 w-4 pr-[1px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      {/* }) } */}
    </div>
  );
};

export default WishlistBtn;
