import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";

import MainSearchInput from "../../UI/MainSearchInput";

import login_icon from "../../assets/header/group_icon.svg";
import registration_icon from "../../assets/header/profile_icon.svg";
import house_icon from "../../assets/header/house_icon.svg";
import pen_icon from "../../assets/header/pen_icon.svg";
import message_icon from "../../assets/header/message_icon.svg";

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
            <div className={classes.search__inputBlock}>
              <MainSearchInput />
            </div>
            <div className={classes.topics__block}>
              <button className={classes.topic}>
                <img src={house_icon} alt="" />
                <p>Фанхати</p>
              </button>
              <button className={classes.topic}>
                <img src={pen_icon} alt="" />
                <p>Автори</p>
              </button>
              <button className={classes.topic}>
                <img src={message_icon} alt="" />
                <p>Випадкова робота</p>
              </button>
            </div>
          </div>

          <div className={classes.registration}>
            <div className={classes.registration__block}>
              <button className={classes.signing__btn}>
                <img src={login_icon} alt="" width={35} />
                <p>Вхід</p>
              </button>
              <button className={classes.signing__btn}>
                <img src={registration_icon} alt="" width={30} />
                <p>Реєстрація</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
