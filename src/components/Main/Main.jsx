import React from "react";
import classes from "./Main.module.css";

import populars_icon from "../../assets/main/populars.svg";

const Main = () => {
  return (
    <section className={classes.MainSection}>
      <div className={classes.left__block}>
        <div className={classes.popular_items}>
          <div className={classes.popular_itemsTitle}>
            <img src={populars_icon} alt="" />
            <p>Популярні фанхати</p>
          </div>

          <div className={classes.popular_item}>
            <h4>Оригінальна робота</h4>
            <span>32</span>
          </div>
          <div className={classes.popular_item}>
            <h4>Оригінальна робота</h4>
            <span>100000</span>
          </div>
          <div className={classes.popular_item}>
            <h4>Оригінальна робота</h4>
            <span>3244</span>
          </div>
          <div className={classes.popular_item}>
            <h4>Оригінальна робота</h4>
            <span>1111</span>
          </div>
          <div className={classes.popular_item}>
            <h4>Оригінальна робота 33</h4>
            <span>32</span>
          </div>
          <div className={classes.popular_item}>
            <h4>Оригінальна робота</h4>
            <span>798</span>
          </div>
        </div>
      </div>
      <div className={classes.central}>
        <div className={classes.fanfiction}>
          <div className={classes.fanfiction__label}>
            <img src="" alt="" />
          </div>
          <div className={classes.fanfiction__info}>
            <h2>Назва</h2>
            <div className={classes.fanfiction__marks}>
              <span>Тип</span>
              <span>Рейтинг</span>
              <span>Статус</span>
            </div>
            <div></div>
          </div>
        </div>
        <div className={classes.fanfiction}>
          <div className={classes.fanfiction__label}>
            <img src="" alt="" />
          </div>
          <div className={classes.fanfiction__info}>
            <h2>Назва</h2>
            <div className={classes.fanfiction__marks}>
              <span>Тип</span>
              <span>Рейтинг</span>
              <span>Статус</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={classes.right__block}>Right</div>
    </section>
  );
};

export default Main;
