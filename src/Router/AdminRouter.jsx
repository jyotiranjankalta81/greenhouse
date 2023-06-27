import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Screen/Admin/AdminLogin/AdminLogin'
import AdminLayout from '../components/Admin/AdminLayout/AdminLayout'
import ContactUs from '../Screen/Admin/ContactUs/ContactUs'
import ManageBlogPages from '../Screen/Admin/ManageBlogPage/ManageBlogPages'
import OnBoardingTable from '../Screen/Admin/OnBoarding/OnBoardingTable'
import GetStarted from '../Screen/Admin/GetStarted/GetStarted'
import ProtectedRoutes from '../Screen/Admin/Gaurds/ProtectedRoutes'
import GetInTouchHomeTable from '../Screen/Admin/GetInTouchHome/GetInTouchHomeTable'
import ManagePages from '../Screen/Admin/ManagePages/ManagePages'
import SubscribeTable from '../Screen/Admin/SubscribeTable/SubscribeTable'

export default function AdminRouter () {
  return (
    <Routes>
      <Route element={<ProtectedRoutes role='1' />}>
        <Route path='/admin-panel' element={<AdminLayout />}>
          <Route path='manage-pages' element={<ManagePages />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='blogpages' element={<ManageBlogPages />} />
          <Route path='on-boarding' element={<OnBoardingTable />} />
          <Route path='get-in-touch' element={<GetInTouchHomeTable />} />
          <Route path='get-started' element={<GetStarted />} />
          <Route path='subscribe-mail' element={<SubscribeTable />} />
          <Route path='*' element={<h1>404: Not Found</h1>} />
        </Route>
      </Route>
    </Routes>
  )
}
