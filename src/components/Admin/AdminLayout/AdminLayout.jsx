import React from 'react'
import { useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AdminLayout.css'
import AdminSideNavigation from './AdminSideNavigation/AdminSideNavigation.jsx'
// import adminLogo from '../../Assets/gcmslogo.png'

export default function AdminLayout () {
  const menuRef = useRef()
  const hamRef = useRef()

  const closeNav = () => {
    menuRef.current.classList.remove('menu--active')
    hamRef.current.classList.remove('hamburger--active')
  }

  const handleHamburgerClick = event => {
    let activeItem = document.querySelector('.dropdown--active')
    event.target.classList.toggle('hamburger--active')
    menuRef.current.classList.toggle('menu--active')
    if (activeItem) {
      activeItem.classList.remove('dropdown--active')
    }
  }

  return (
    <main className='admin-layout'>
      <div className='side-nav-container' ref={menuRef}>
        <AdminSideNavigation closeNav={closeNav} />
      </div>
      <div className='admin-header-wrapper'>
        <header className='admin-header'>
          <h3 className='header-title'>Welcome to: Green House Family</h3>
          <ul className='hamburger' ref={hamRef} onClick={handleHamburgerClick}>
            <li className='layer'></li>
            <li className='layer'></li>
            <li className='layer'></li>
          </ul>
          <Link to='/admin-panel/manage-pages' className='header-logo-wrapper'>
            <img
              src='/Images/Navbar/BeklomLogo.png'
              className='header-logo'
              alt=''
            />
          </Link>
        </header>
      </div>

      <section className='admin-content'>
        <Outlet />
      </section>
    </main>
  )
}
