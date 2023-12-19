import React from "react";

const CartContext = React.createContext({
    id:'',
  candiName: '',
  quantity: 0,
  
});

export default CartContext;
