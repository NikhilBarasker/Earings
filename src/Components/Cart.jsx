import React, { useState } from 'react'
import { useContext } from 'react'
import IconContext from '../Context/IconContext';
import { cart } from './data';
import '../App.css'
import '../Responsive.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Cart = () => {
  //  let [increment, setincrement] = useState(1);

  const { setCartValue, cartValue, cartItems, setCartItems, empty, setEmpty } =
    useContext(IconContext);

  const [quantities, setQuantities] = useState({});

  console.log('xxxxxxxxxxxxxxxxxxxxxxxx',cartItems)

const handleIncrement = (index) => {
  setQuantities((prevQuantities) => ({
    ...prevQuantities,
    [index]: (prevQuantities[index] || 0) + 1,
  }));

  // Update the quantity in the cartItems object and calculate the updated price
  const updatedCartItems = cartItems.map((item, i) => {
    if (i === index) {
      const updatedQuantity = (quantities[index] || 0) + 1;
      return {
        ...item,
        quantity: updatedQuantity,
        price: item.product.price * updatedQuantity,
      };
    }
    return item;
  });
  setCartItems(updatedCartItems);
};

const handleDecrement = (index) => {
  if (quantities[index] > 0) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: prevQuantities[index] - 1,
    }));

    // Update the quantity in the cartItems object and calculate the updated price
    const updatedCartItems = cartItems.map((item, i) => {
      if (i === index) {
        const updatedQuantity = (quantities[index] || 0) - 1;
        return {
          ...item,
          quantity: updatedQuantity,
          price: item.product.price * updatedQuantity,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }
};

const handleRemoveItem = (index) => {
  const confirmed = window.confirm("Are you sure to remove this item?");
  if (confirmed) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    setCartValue(cartValue - 1);
  }
};


  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="">
      {!empty && (
        <div className="font-[sans-serif]">
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
              <div className="flex border-b pb-4">
                <h2 className="text-2xl font-extrabold text-[#333] flex-1">
                  Shopping Cart
                </h2>
                <h3 className="text-xl font-extrabold text-[#333]">
                  {cartItems.length} Items
                </h3>
              </div>
              <div>
                <table className="mt-6 w-full border-collapse divide-y">
                  {/* <thead className="whitespace-nowrap text-left">
                    <tr>
                      <th className="text-base text-[#333] p-4">Description</th>
                      <th className="text-base text-[#333] p-4">Quantity</th>
                      <th className="text-base text-[#333] p-4">Price</th>
                    </tr>
                  </thead> */}
                  <tbody className="whitespace-nowrap divide-y">
                    {cartItems &&
                      cartItems.map((item, index) => (
                        <tr key={index}>
                          <div className="imgQuentityPrice">
                            <div>
                              <td className="py-6 px-4">
                                <div className="flex  items-center gap-6 w-max">
                                  <div className="h-36 shrink-0">
                                    <img
                                      src={item.product.imageUrl}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-md font-bold text-[#333]">
                                      {item.product.productName}
                                    </p>
                                    <button
                                      type="button"
                                      className="mt-4 font-semibold text-red-400 text-sm"
                                      onClick={() => handleRemoveItem(index)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </div>
                            <div className="qunatityPrice">
                              <td className="py-6 px-4 quantity">
                                <div className="flex-col divide-x mt-[45px] border w-max cartItemsInfo block">
                                  <button
                                    type="button"
                                    onClick={() => handleDecrement(index)}
                                    className="bg-gray-100 px-4 py-2 font-semibold"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-3 fill-current"
                                      viewBox="0 0 124 124"
                                    >
                                      <path
                                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                        data-original="#000000"
                                      ></path>
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                                  >
                                    {quantities[index] || 1}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleIncrement(index)}
                                    className="bg-gray-800 text-white px-4 py-2 font-semibold"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-3 fill-current"
                                      viewBox="0 0 42 42"
                                    >
                                      <path
                                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                        data-original="#000000"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td className="py-6 px-4 mt-[50px]">
                                <h4 className="text-md font-bold text-[#333]">
                                  Rs.{" "}
                                  {item.product.price *
                                    (quantities[index] || 1)}
                                </h4>
                              </td>
                            </div>
                          </div>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gray-50 p-10">
              <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
                Order Summary
              </h3>

              {cartItems.map((item, index) => {
                <ul className="text-[#333] divide-y mt-6">
                  <li className="flex flex-wrap gap-4 text-md py-4">
                    Subtotal{" "}
                    <span className="ml-auto font-bold">
                      Rs. {item.product.price * (quantities[index] || 0)}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-md py-4">
                    Shipping <span className="ml-auto font-bold">$4.00</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-md py-4">
                    Tax <span className="ml-auto font-bold">$4.00</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                    Total <span className="ml-auto">$45.00</span>
                  </li>
                </ul>;
              })}
              <Link
                to={{
                  pathname: "/checkout",
                }}
              >
                <button
                  type="button"
                  className="mt-6 text-md px-6 py-2.5 w-full bg-green-600 hover:bg-green-700 text-white rounded"
                >
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {empty && (
        <div className="w-full h-[60vh]">
          <div className="w-[100%] h-[100%] flex flex-col justify-center ">
            <img src={cart} alt="" className="w-[150px] mx-auto" />
            <h1 className=" text-4xl text-center">Your cart is empty !</h1>
            <Butt>
              <Link to={"/"} onClick={handleLinkClick}>
                <button>Continue Shopping...</button>
              </Link>
            </Butt>
          </div>
        </div>
      )}
      {/* <Cheakout cartItems={cartItems} /> */}
    </div>
  );
};

export default Cart

const Butt = styled.button`
margin: 20px 0;
button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: 2px solid #23c483;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #23c483;
  border: 2px solid #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
`;