// import React from 'react'
import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './AboutSection.css'

const AboutSection = () => {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <div className='about_container'>
        <div className='about_main_container'>
          <div className='about_left_container'>
            <img src='/Images/About/aboutleftbg.png' alt='' />
          </div>
          <div className='about_right_container'>
            {/* <h1>{row[0].HEADING}</h1> */}
            {/* <p>{row[0].CONTENT}</p> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
