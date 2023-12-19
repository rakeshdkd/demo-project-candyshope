import React, { useReducer } from "react";
import CartContext from './cart-context'

const CartProvider = (props) => {
    const cartContext={
        id:'',
        candyName:'',
        quantity:0
    }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
