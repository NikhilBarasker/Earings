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

    // const handleToast = () => {
    //     toast.success('🦄 Wow so easy!', {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //         });
    // }
  return (
    <>
    <div >
      <form className="mt-4">
      <button 
        onClick={handleIncrement}
        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
    </div>

    {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> */}
    </>
  )
}

export default AddCartBtn
