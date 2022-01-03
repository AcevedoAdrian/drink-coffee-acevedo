import React, { createContext, useState } from "react";


export const CartConetext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCart] = useState([]);

  const addItem = (item, quantity) => {

    if (isInCart(item.id)) {
      updateItem(item.id, quantity);
    } else {
      setCart(
        [...cartItems, {
          id: item.id,
          brand: item.brand,
          img: item.img,
          weight: item.weight,
          price: item.precie,
          quantity
        }]
      )
    }
  }

  const removeItem = (itemId) => {
    return setCart(
      cartItems.filter(item => item.id !== itemId)
    )

  }

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (itemId) => {

    return cartItems.find(item => item.id === itemId) ? true : false
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const updateItem = (itemId, quantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        item.quantity += quantity
      }
      return item
    })
    setCart(updatedCart)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartConetext.Provider value={
      {
        cartItems,
        setCart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        getTotalItems,
        getTotalPrice
      }
    }>
      {children}
    </CartConetext.Provider>
  )
};