import React from "react";
import classes from "./Main.module.css";

import populars_icon from "../../assets/main/populars.svg";
import author1_avatar from "../../assets/main/authors/author1.png";
import author2_avatar from "../../assets/main/authors/author2.png";
import author3_avatar from "../../assets/main/authors/author3.png";
import author4_avatar from "../../assets/main/authors/author4.png";
import author5_avatar from "../../assets/main/authors/author5.png";
import author6_avatar from "../../assets/main/authors/author6.png";
import icon_heart from "../../assets/main/icon _heart.png";

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
          <div className={classes.fanfiction__likes}>
            <img src={icon_heart} alt="" />
            <span>023</span>
          </div>
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
            <div className={classes.fanfiction__descriptionBlocks}>
              <div className={classes.fanfiction__descriptionBlock}>
                <h3>Автор:</h3>
                <p>автор</p>
              </div>
              <div className={classes.fanfiction__descriptionBlock}>
                <h3>Позначки:</h3>
                <span>Позначка</span>
                <span>Позначка</span>
                <span>Позначка</span>
              </div>
              <div className={classes.fanfiction__descriptionBlock}>
                <h3>Розмір:</h3>
                <p>1672 слова</p>
              </div>
              <div className={classes.fanfiction__descriptionBlock}>
                <h3>Автор:</h3>
                <p>10.09.2021</p>
              </div>
              <div className={classes.fanfiction__description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                suscipit quia reiciendis ipsa amet optio beatae deserunt itaque.
                Vel tempore quos recusandae? Eaque reprehenderit expedita nulla
                recusandae reiciendis non ut.
              </div>
            </div>
          </div>
        </div>

        <div className={classes.fanfiction}>
          <div className={classes.fanfiction__likes}>
            <img src={icon_heart} alt="" />
            <span>002</span>
          </div>
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
            <div className={classes.fanfiction__descriptionBlocks}>
              <div className={classes.fanfiction__descriptionBlock}>
                <h3>Автор:</h3>
                <p>автор</p>
              </div>
              <div className={classes.fanfiction__descriptionBlock}>
                <h3>Позначки:</h3>
                <span>Позначка</span>
                <span>Позначка</span>
              </div>
              <div className={classes.fanfiction__descriptionBlock}>
                <h3>Розмір:</h3>
                <p>11022 слова</p>
              </div>
              <div className={classes.fanfiction__descriptionBlock}>
                <h3>Автор:</h3>
                <p>11.09.2022</p>
              </div>
              <div className={classes.fanfiction__description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                suscipit quia reiciendis ipsa amet optio beatae deserunt itaque.
                Vel tempore quos recusandae? Eaque reprehenderit expedita nulla
                recusandae reiciendis non ut.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right__block}>
        <div className={classes.popular_authors}>
          <div className={classes.popular_authorsTitle}>
            <img src={populars_icon} alt="" />
            <p>Популярні автори</p>
          </div>

          <div className={classes.popular_author}>
            <img src={author1_avatar} alt="" />
            <div className={classes.author_name}>
              <h4>Carter Passaquindici Arcand</h4>
              <p>@CarterPassaquindiciArcand</p>
            </div>
          </div>
          <div className={classes.popular_author}>
            <img src={author2_avatar} alt="" />
            <div className={classes.author_name}>
              <h4>Paityn George</h4>
              <p>@PaitynGeorge</p>
            </div>
          </div>
          <div className={classes.popular_author}>
            <img src={author3_avatar} alt="" />
            <div className={classes.author_name}>
              <h4>Cheyenne Vaccaro</h4>
              <p>@CheyenneVaccaro</p>
            </div>
          </div>
          <div className={classes.popular_author}>
            <img src={author4_avatar} alt="" />
            <div className={classes.author_name}>
              <h4>Kianna Septimus</h4>
              <p>@KiannaSeptimus</p>
            </div>
          </div>
          <div className={classes.popular_author}>
            <img src={author5_avatar} alt="" />
            <div className={classes.author_name}>
              <h4>Cheyenne Press</h4>
              <p>@CheyennePress</p>
            </div>
          </div>
          <div className={classes.popular_author}>
            <img src={author6_avatar} alt="" />
            <div className={classes.author_name}>
              <h4>James Vetrovs</h4>
              <p>@JamesVetrovs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
