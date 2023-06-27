import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Screen/Admin/AdminLogin/AdminLogin'

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/auth/adminLogin' element={<AdminLogin />} />
      </Routes>
    </>
  )
}
