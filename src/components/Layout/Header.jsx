import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import login_icon from "../../assets/header/🦆 icon _login.png";
import registration_icon from "../../assets/header/🦆 icon _registration.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.header__content}>
          <div className={classes.logo__block}>
            <div className={classes.logo}>Pawdian</div>
            <div className={classes.logo__status}>Pre-alpha</div>
          </div>

          <div className={classes.medium__header}>
            <div>Header medium section</div>
          </div>

          <div className={classes.registration}>
            <div className={classes.registration__block}>
              <div className={classes.signing__btn}>
                <img src={login_icon} alt="" width={35} />
                <p>Вхід</p>
              </div>
              <div className={classes.signing__btn}>
                <img src={registration_icon} alt="" width={30} />
                <p>Реєстрація</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
