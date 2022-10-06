import React from "react";
import classes from "./Header.module.css";
import headerImage from "../../assets/HeaderImage.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Chinese Food Corner</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Chinese Food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
