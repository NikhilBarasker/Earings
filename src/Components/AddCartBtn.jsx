import React from 'react'
import { useContext } from 'react'
import IconContext from '../Context/IconContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCartBtn = (product) => {
    const item = product.product;
    // console.log('ass',item);
    const { setCartValue, cartValue, cartItems, setCartItems } = useContext(IconContext);
    
    const handleIncrement = () => {
        setCartValue(cartValue + 1);
        // handleToast(item);
        alert(`Product ${item.productName} added to cart!`)
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
    }

    const handleToast = (item) => {
        toast.success(`Product ${item.productName} added to cart!`, { 
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

  return (
    <>
    <div >
      <form className="mt-4">
      <button 
        onClick={handleIncrement}
        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105" style={{background:'#2e2d3d', color:'white'}}
      >
        Add to Cart
      </button>
    </form>
    </div>

    <ToastContainer
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
      />
    </>
  )
}

export default AddCartBtn
