import React, { useEffect, useState } from 'react'
import IconContext from './IconContext'

const IconContextProvider = (props) => {
    const [cartValue, setCartValue] = useState(0)
    const [likeValue, setlikeValue] = useState(0)
  const [cartItems, setCartItems] = useState([]);
      const [wishItems, setWishItems] = useState([]);
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
      // Check if cartValue is 0 to determine if empty should be true
      setEmpty(cartValue === 0);
  }, [cartValue]); // Trigger effect whenever cartValue changes


  return (
    <IconContext.Provider
      value={{
        setWishItems,
        wishItems, cartValue,
        setCartValue,
        likeValue,
        setlikeValue,
        cartItems,
        setCartItems,
        empty,
        setEmpty,
      }}
    >
      {props.children}
    </IconContext.Provider>
  );
}

export default IconContextProvider
