import React from 'react'
import './ourclient.css'

const OurClient = () => {
  return (
    <>
      <div className='our_client_container'>
        <div className='header_container'>
          <div className='inside_header'>
            <img src='/Images/Home/LeftArrow.png' alt='bg' />
          </div>
          <div className='inside_headers'>
            <div className='inside_head'>
              <h1>Our Client</h1>
            </div>
          </div>
          <div className='inside_header'>
            <img src='/Images/Home/RightArrow.png' alt='bg' />
          </div>
        </div>
        <div className='client_card'>
          <div className='company_card'>
            <img src='/Images/Services/gcms.png' alt='' />
          </div>
          <div className='company_card'>
            <img src='/Images/Services/settlement.png' alt='' />
          </div>
          <div className='company_card'>
            <img src='/Images/Services/dispatch.png' alt='' />
          </div>
          <div className='company_card'>
            <img src='/Images/Services/kasta.png' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurClient
