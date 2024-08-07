import React, { useContext } from "react";
import AddCartBtn from "./AddCartBtn";
import { Link } from "react-router-dom";
import WishlistBtn from "./WishlistBtn";
import ProductDetail_Context from "../Context/ProductDetail_Context";
import {motion} from "framer-motion";

const ProductCard = (product) => {
  const { ShowProduct, setShowProduct } = useContext(ProductDetail_Context);
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const ShowDetails = () => {
    handleLinkClick();
    setShowProduct(product);
    console.clear();
    // console.log("ShowProduct",ShowProduct);
  };

  return (
    <motion.div initial={{
      y:50,
      opacity:0
               }}
               whileInView={{
                 y:0,
                 opacity:1
               }}
               transition={{
                 duration:1,
                 delay:.3
               }}  className='max-w-[100%] w-[350px]  border-[2px] border-gray-100' style={{boxShadow:'0px 5px 10px -2px rgba(0,0,0,0.5)', borderRadius:'10px'}}>
      <Link className="group relative block overflow-hidden">
        <WishlistBtn product={ product} />

        <Link to={"/ProductDetail"} onClick={ShowDetails}>


          <img
            src={product.product.imageUrl}
            alt=""
            className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 "
            style={{ borderRadius: "10px" }}
          />
        </Link>

        <div
          className="relative border border-gray-100 bg-white p-6"
          style={{ borderRadius: "10px" }}
        >
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            {" "}
            New{" "}
          </span>

          <Link to={"/ProductDetail"} onClick={ShowDetails}>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {product.product.productName}
            </h3>
          </Link>

          <p className="mt-1.5 text-sm text-gray-700">
            Rs.{product.product.price}
          </p>

          <AddCartBtn product={product.product} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
