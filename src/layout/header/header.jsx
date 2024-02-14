import React from "react";
import { homeData } from "../../data/home";
import logo from "../../assets/logo.svg";
import icon1 from "../../assets/header_icon.svg";
import icon2 from "../../assets/header_icon2.svg";
import img from "../../assets/header_seorch.svg";
import "./header.scss";
export const Header = () => {
  return (
    <div className=" header_container">
      <div className="container header_block">
        <div className="header_box">
          <img src={logo} alt="" />
          <p className="header_text">
            Колбасы и мясные <br /> деликатесы
          </p>
        </div>
        <div className="header_icon_block">
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
          <h1 className="header_sum">
            <span className="header_num">Товаров: 3</span> <br /> 6 540 ₽
          </h1>
        </div>
      </div>
      <div className="header2">
        <div className="container header_search">
          <ul className="header_list">
            {homeData.map((item) => (
              <li key={item.path}>
                <a href={item.path}></a>
                {item.name}
              </li>
            ))}
          </ul>
          <div className="header_form">
            <input
              className="header_input"
              type="text"
              placeholder="Поиск по сайту"
            />
            <img className="header2_img" src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
