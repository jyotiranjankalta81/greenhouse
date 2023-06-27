import React from 'react'
import Footer from '../../components/Footer/Footer'
import TopHeader from '../../components/TopHeaer/TopHeader'
import Onboard from '../OnBoard/Onboard'
import Tech from '../Tech/Tech'
import WhyChoose from '../WhyChoose/WhyChoose'
import WeHandle from '../WeHandle/WeHandle.jsx'
import ImageListing from '../ImageListing/ImageListing.jsx'

const Home = () => {
  return (
    <>
      <TopHeader />
      <WeHandle />
      <ImageListing />
      {/* <WhyChoose /> */}

      {/* <Tech /> */}
      {/* <Onboard /> */}
      <Footer />
    </>
  )
}

export default Home
