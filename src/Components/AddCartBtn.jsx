import React from 'react'
import { useContext } from 'react'
import IconContext from '../Context/IconContext';



const AddCartBtn = (product) => {
    const { setCartValue, cartValue, cartItems, setCartItems } = useContext(IconContext);
    const handleIncrement = () => {
        setCartValue(cartValue +1)
        
        
        const updatedCartItems = [...cartItems, product];
        // Set the new cart items
        setCartItems(updatedCartItems);

        console.log(updatedCartItems);
    }
  return (
    <div>
      <form className="mt-4">
      <button 
        onClick={handleIncrement}
        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
    </div>
  )
}

export default AddCartBtn
