import React from 'react'
import { useContext } from 'react'
import IconContext from '../Context/IconContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const AddCartBtn = (product) => {
  // console.log('xxx',product)
    const item = product.product;
    const { setCartValue, cartValue, cartItems, setCartItems } = useContext(IconContext);
    // console.log('hi')
    
    const isOpen  = cartItems.find((ab)=> ab.product.productName === product.product.productName) 


    const handleIncrement = () => {
      // e.preventdefault();
      if (!isOpen) {
        setCartValue(cartValue + 1);
        // alert(`Product ${item.productName} added to cart!`)
        Swal.fire({
          // title: "Good job!",
          text: "Product ${item.productName} added to cart!",
          icon: "success"
        });
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        return 
      }
      return alert("Already added to Cart")
      // console.log('zzzzzzzzzzzzzzzz',updatedCartItems);
    }
    
    
    // const handleToast = (item) => {
      //     toast.success(`Product ${item.productName} added to cart!`, { 
        //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //     });
    // }

    
    
    return (
      <>
       <div>
           
          <button
          className={`flex w-full items-center justify-center rounded ${isOpen ?"bg-green-800 text-white" : "bg-[#2e2d3d] text-white"}  p-4 text-sm font-medium transition hover:scale-105`}
          // disabled = {isOpen?true:false}
          onClick={handleIncrement}
          >
            {isOpen ?"Added to Cart":"Add to Cart" }
           
           </button>
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
   );
}

export default AddCartBtn
