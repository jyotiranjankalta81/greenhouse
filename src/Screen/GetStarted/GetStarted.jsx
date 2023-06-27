import React from 'react'
import Footer from '../../components/Footer/Footer'
import GetStartedForm from './GetStartedForm/GetStartedForm'
import FaqContent from '../FAQ/FaqContent/FaqContent'

const GetStarted = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='right_intro'>
            <img src='/Images/Pickup/pickup.png' alt='' />
          </div>
          <div className='left_intro'>
            <h1>Get Started</h1>
            <p>
              Let’s talk about your website or projects. Send us a message and
              wewill be in touch within one business day
            </p>
          </div>
        </div>
      </div>
      {/* <FaqContent /> */}
      <GetStartedForm />
      <Footer />
    </>
  )
}

export default GetStarted
