import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ContactForm from './ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container' data-aos='fade-down'>
          <div className='right_intro'>
            {/* <img src='/Images/Services/servicerightbg.png' alt='' /> */}
            <img src='/Images/Contact/contactguy.png' alt='' />
          </div>
          <div className='left_intro'>
            <h1 className='contact_us_header'>
              {/* Ready <br /> to assist <br /> you! */}
              Ready To Assist You!
            </h1>
            <p>
              Let’s talk about your website or projects. Send us a message and
              wewill be in touch within one business day
            </p>
            {/* <Link to='/order' className='Link_btn'>
              <div className='get_started'>Order</div>
            </Link> */}
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactUs
