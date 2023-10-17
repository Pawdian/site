import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.header__content}>
          <div>Logo</div>
          <div>Header medium section</div>
          <div>Registration</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
