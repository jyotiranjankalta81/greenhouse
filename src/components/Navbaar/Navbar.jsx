import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

function Navbar () {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <div className='navigation_bar'>
        <div className='social_site'>
          <div className='social_mail_container'>
            <NavLink to='/' className='logo_link'>
              <div className='logo'>
                <img src='/Images/Logos.png' alt='' />
              </div>
            </NavLink>
          </div>
          <p className='address_company' style={{ color: '#8FD3ED' }}>
            Groveland,PA
          </p>
        </div>

        <nav className='navbar'>
          <ul
            className={isMobile ? 'nav-links nav-links-mobile' : 'nav-links'}
            onClick={() => setIsMobile(false)}
          >
            <NavLink to='/' className='services'>
              <li>Home</li>
            </NavLink>
            <NavLink to='/about' className='services'>
              <li>About Us</li>
            </NavLink>
            <NavLink to='/order' className='faqs'>
              <li>Schedule a PickUp</li>
            </NavLink>
            <NavLink to='/contact-us' className='blogs'>
              <li>Contact Us</li>
            </NavLink>
          </ul>
          <button
            className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i>
                <FeatherIcon icon='x' />
              </i>
            ) : (
              <i>
                <FeatherIcon icon='menu' />
              </i>
            )}{' '}
          </button>
        </nav>
      </div>
    </>
  )
}

export default Navbar
