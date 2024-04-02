import React, { useState } from 'react'
import IconContext from './IconContext'

const IconContextProvider = (props) => {
    const [cartValue, setCartValue] = useState(0)
    const [likeValue, setlikeValue] = useState(0)
    const [cartItems, setCartItems] = useState([]);

  return (
    <IconContext.Provider value={{cartValue, setCartValue, likeValue, setlikeValue, cartItems, setCartItems}}>
      {props.children}
    </IconContext.Provider>
  )
}

export default IconContextProvider
