import React from "react";
import style from "./main-banner.module.scss";
export const MainBanner = ({ title, text, img }) => {
  return (
    <div className={style.banner}>
      <img className={style.banner_img} src={img} alt="img" />
      <div className={style.banner_block}>
        <h1 className={style.banner_title}>{title}</h1>
        <p className={style.banner_text}>{text}</p>
        <button className={style.banner_btn}>Купить</button>
      </div>
    </div>
  );
};
