import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext; // pull out the items

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0); // built-in method: transform an array into a value, a function + starting value

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300); // 300 milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, [items]); // function, dependency - items array change -> button animation

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`; // button animation

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
