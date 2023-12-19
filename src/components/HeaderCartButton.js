import React, {useContext, useEffect} from "react";
import CartContext from "./cart-context";
// import CartContext from "../../Store/Cart-context";

const HeaderCartButton = (props) => {
    const cartCtx= useContext(CartContext)

//   const numberOfCartItems = cartCTX.items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

useEffect(() => {
    return;
  }, [cartCtx.quantity]);
  


  return (
    <button  onClick={props.onClick}>
      <span>
        <h5>{cartCtx.candiName}</h5>
      </span>
      <span>Your Cart </span>
      <span >{cartCtx.quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
