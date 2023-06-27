import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './TopHeader.css'
export default function TopHeader () {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    // <div
    //   className='WhatClientSays'
    //   data-aos='fade-down'
    //   style={{
    //     backgroundImage: `url(${
    //       process.env.PUBLIC_URL + '/Images/Home/topone.png'
    //     })`
    //   }}
    // >
    //   <div className='top_header'></div>
    //   <div className='top_header_right'>
    //     <h3 className='top_header_content_heading'>
    //       Keeping <br /> Books in <br /> Readers <br />
    //       Hands.
    //     </h3>
    //     <p className='top_header_para_details'>
    //       Do you live near Harrisburg Pennsylvania? Donate your used books and
    //       <br />
    //       media by scheduling a pick up
    //     </p>
    //   </div>
    // </div>
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='right_intro'>
            <img
              src='/Images/Home/homebg.jpeg'
              alt=''
              crossOrigin='anonymous'
            />
          </div>
          <div className='left_intro'>
            <h1 data-aos='fade-down'>
              {/* Celebrating <br /> the written <br /> word <br /> together. */}
              Keeping <br />
              Books in <br /> Readers <br /> Hands.
            </h1>
            <p data-aos='fade-down'>
              Leading Resource for Recruitment in Technical and Non-Technical
              backgrounds !
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
