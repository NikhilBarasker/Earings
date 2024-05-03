import React from "react";
import "../App.css";
import '../Responsive.css'
import { useContext } from "react";
import IconContext from "../Context/IconContext";
import AddCartBtn from "../Components/AddCartBtn"
import { GiCancel } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";

const Wishlists = () => {
  const {
    setWishItems,
    wishItems,
    wishValue,
    setWishValue,
    likeValue,
    setlikeValue,
    setCartValue,
    cartValue,
    wishlistValue,
    cartItems,
    setCartItems,
    empty,
    setEmpty,
  } = useContext(IconContext);

  console.log("wishItems", wishItems);

  const handleRemoveItem = (index) => {
    const confirmed = window.confirm("Are you sure to remove this item?");
    if (confirmed) {
      const updatedWishItems = [...wishItems];
      updatedWishItems.splice(index, 1);
      setWishItems(updatedWishItems);
      setWishValue(wishValue - 1);
      setlikeValue(likeValue - 1);
    }
  };

  return (
    <div className="font-[sans-serif] bg-gray-100 ">
      <div className="p-4  wishlist">
        {wishItems.map((product, index) => (
          <div className="">
            <div className="bg-white rounded-2xl p-5 cursor-pointer  transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <button>
                  <GiCancel onClick={() => handleRemoveItem(index)} />
                </button>
              </div>
              <div className="w-11/12 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src={product.product.imageUrl}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-800">
                  {product.product.productName}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {product.product.description}
                </p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <FaRupeeSign
                      style={{
                        margin: "4px 1px 0 0",
                      }}
                    />
                    <div>{product.product.price}</div>
                  </div>
                  <AddCartBtn product={product.product} />
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlists;
