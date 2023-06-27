import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Screen/About/About'
import Blogs from '../Screen/Blogs/Blogs'
import ContactUs from '../Screen/ContactUs/ContactUs'
import FAQ from '../Screen/FAQ/FAQ'
import GetStarted from '../Screen/GetStarted/GetStarted'
import Home from '../Screen/Home/Home'
import OnBoardPage from '../Screen/OnBoardPage/OnBoardPage'
import Services from '../Screen/Services/Services'

export default function MainRouter () {
  return (
    <Fragment>
      {/* routes is used for routing */}
      <Routes>
        {/* this is the routing structure */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route exact path='/order' element={<GetStarted />} />
        <Route exact path='/onboard' element={<OnBoardPage />} />
        <Route exact path='/faq' element={<FAQ />} />
      </Routes>
    </Fragment>
  )
}
