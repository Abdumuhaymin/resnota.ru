import React from "react";
import productStyle from "./main-product.module.scss";
export const MainProduct = ({ title, text, img }) => {
  return (
    <div className={productStyle.product}>
      <img className={productStyle.product_img} src={img} alt="img" />
      <div className={productStyle.product_block}>
        <h1 className={productStyle.product_title}>{title}</h1>
        <p className={productStyle.product_text}>{text}</p>
      </div>
    </div>
  );
};
