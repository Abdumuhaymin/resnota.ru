import React from 'react'
import  skidkastyle from "./skidka.module.scss"
export const MainSkidka = ({img,title,text,sum,skidka,foiz,ekonom,btn1,btn2}) => {
  return (
    <div className={skidkastyle.skidka}>
      <img className={skidkastyle.skidka_img} src={img} alt="img" />
      <h1 className={skidkastyle.skidka_title}>{title}</h1>
      <p className={skidkastyle.skidka_text}>{text}</p>
      <h2 className={skidkastyle.skidka_sum}>{sum}</h2>
      <div className={skidkastyle.skidka_card}>
       <h2 className={skidkastyle.skidka_skidka}>{skidka}</h2>
       <div>
        <p className={skidkastyle.skidka_foiz}>{foiz}</p>
        <p className={skidkastyle.skidka_ekonom}>{ekonom}</p>
       </div>
      </div>
      <div className={skidkastyle.skidka_btn_block}>
       <button className={skidkastyle.skidka_btn1}>{btn1}</button>
       <button className={skidkastyle.skidka_btn2}>{btn2}</button>
      </div>
    </div>
  )
}

export default MainSkidka 
