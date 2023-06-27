import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../../components/Footer/Footer'
import FaqContent from '../FAQ/FaqContent/FaqContent'
import AboutSection from './AboutSection/AboutSection'
import CoreMember from '../CoreMember/CoreMember.jsx'
import '../../components/TopHeaer/CrouselCard/Card1.css'

const About = () => {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='right_intro'>
            <img
              src='/Images/About/aboutusbgs.png'
              alt=''
              crossOrigin='anonymous'
            />
          </div>
          <div className='left_intro'>
            <h1 data-aos='fade-down'>
              {/* Celebrating <br /> the written <br /> word <br /> together. */}
              Stories That Inspire.
            </h1>
            <p data-aos='fade-down'>
              Leading Resource for Recruitment in Technical and Non-Technical
              backgrounds !
            </p>
          </div>
        </div>
      </div>

      {/* <AboutSection /> */}
      <CoreMember />
      <FaqContent />
      <Footer />
    </>
  )
}

export default About
