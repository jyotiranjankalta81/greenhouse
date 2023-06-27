import React from 'react'
import Industry from './Industry/Industry'
import OurClient from './OurClient/OurClient'
import OurServices from './OurServices/OurServices'
import TopServices from './TopServices/TopServices'
import Footer from '../../components/Footer/Footer'

const Services = () => {
  return (
    <>
      <TopServices />
      <OurServices />
      <Industry />
      <OurClient />
      <Footer />
    </>
  )
}

export default Services
