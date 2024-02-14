import React from 'react'
import { bannerData } from '../../data/home'
import {MainBanner} from '../../components/banners/main-banner'
import MainLayout from '../../layout/main-layout'
import { MainProduct } from '../../components/products/main-product'
import { productData } from '../../data/home'
import { MainSkidka } from '../../components/skidkas/skidka'
import { skidkaData } from '../../data/home'
export const Home = () => {
  return (
    <div>
      <MainLayout>
       { bannerData.map((item,i)=> <MainBanner key = {i} title={item.title} text ={item.text} img ={item.img}/>)}
       { productData.map((item,i)=> <MainProduct key = {i} title={item.title} text ={item.text} img ={item.img}/>)}
       { skidkaData.map((item,i)=> <MainSkidka key = {i} img={item.img} title ={item.title} text ={item.text} sum ={item.sum} skidka ={item.skidka}  foiz ={item.foiz} ekonom ={item.ekonom} btn1 ={item.btn1} btn2 ={item.btn2}/>)}

      </MainLayout>
    </div>
  )
}

export default Home
