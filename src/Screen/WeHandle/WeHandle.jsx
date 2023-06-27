import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './WeHandle.css'
import { Link } from 'react-router-dom'

const WeHandle = () => {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div className='we_handle_container'>
        <div className='wehandle_sub_container'>
          <h1 className='we_handle_heading' data-aos='fade-down'>
            We Handle Everything For You
          </h1>
          <p className='we_handle_para' data-aos='fade-down'>
            Allow us to save you a trip to the local donation center. No need to
            load tons of boxes into your vehicle anymore! We accept books and
            media, below are the different types of services we offer.
          </p>
          <div className='triple_sections'>
            <div
              className='triples_section'
              data-aos='zoom-in-right'
              data-aos-duration='10000'
              data-aos-easing='linear'
            >
              <img src='/Images/Home/Img1.png' alt='' />
              <h4 className='media_pickup'>
                Scheduled <br /> Book Pick-up
              </h4>
              <p className='media_pickup_para'>
                {/* Box or gather up your gently used media and schedule a pick up. */}
                Box or gather up your gently used Book and schedule a pick up.
              </p>
              <Link
                to='/order'
                style={{
                  width: 'auto',
                  textDecoration: 'none',
                  listStyle: 'none',
                  color: '#FFFFFF'
                }}
              >
                <button className='media_pick_up_btn'>
                  Schedule Media Pick Up
                </button>
              </Link>
            </div>
            <div
              className='triples_section'
              data-aos='fade-down-right'
              data-aos-duration='10000'
              data-aos-easing='linear'
            >
              <img src='/Images/Home/Img2.png' alt='' />
              <h4 className='media_pickup'>
                Scheduled Book <br /> Pick-up
              </h4>
              <p className='media_pickup_para'>
                {/* Box or gather up your gently used media and schedule a pick up. */}
                Box or gather together your books and schedule a book pick up.
              </p>
              <Link
                to='/order'
                style={{
                  width: 'auto',
                  textDecoration: 'none',
                  listStyle: 'none',
                  color: '#FFFFFF'
                }}
              >
                <button className='media_pick_up_btn'>
                  Schedule Book Pick Up
                </button>
              </Link>
            </div>
            <div
              className='triples_section'
              data-aos='zoom-in-left'
              data-aos-easing='linear'
              data-aos-duration='10000'
            >
              <img src='/Images/Home/Img3.png' alt='' />
              <h4 className='media_pickup'>
                Large Scale <br /> Donations
              </h4>
              <p className='media_pickup_para'>
                For large scale donations, please contact us below.
              </p>
              <Link
                to='/contact-us'
                style={{
                  width: 'auto',
                  textDecoration: 'none',
                  listStyle: 'none',
                  color: '#FFFFFF'
                }}
              >
                <button
                  className='media_pick_up_btn'
                  style={{ width: '150px' }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeHandle
