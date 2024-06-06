import React from 'react'
import { useContext } from 'react'
import IconContext from '../Context/IconContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCartBtn = (product) => {
  console.log('xxx',product)
    const item = product.product;
    const { setCartValue, cartValue, cartItems, setCartItems } = useContext(IconContext);
    console.log('hi')
  const handleIncrement = () => {
    // e.preventdefault();
        setCartValue(cartValue + 1);
        alert(`Product ${item.productName} added to cart!`)
        const updatedCartItems = [...cartItems, product];
      setCartItems(updatedCartItems);
      console.log('zzzzzzzzzzzzzzzz',updatedCartItems);
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
         <div
           onClick={handleIncrement}
           className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
           style={{ background: "#2e2d3d", color: "white" }}
         >
           Add to Cart
         </div>
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
