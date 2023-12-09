import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Brand from '../components/Brand'
import BannerInfo from '../components/bannerInfo'
import Shop from './Shop'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <BannerInfo></BannerInfo>
      <Brand> </Brand>
      <Shop query={8} > </Shop>
      <Testimonial></Testimonial>
      
    </div>
  )
}

export default Home