import React, { useState } from 'react'
import ProductDetail_Context from './ProductDetail_Context'

const ProductProvider = (props) => {
    const [ShowProduct, setShowProduct] = useState([]);
  return (
    <ProductDetail_Context.Provider value={{ShowProduct, setShowProduct}} >
      {props.children}
    </ProductDetail_Context.Provider>
  )
}

export default ProductProvider
