import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import {
  selectAuthToken,
  selectUserRole
} from '../../../Redux/features/authenticationSlice'

export default function ProtectedRoutes ({ role }) {
  const token = useSelector(selectAuthToken)
  const userRole = useSelector(selectUserRole)
  return token && userRole == role ? (
    <Outlet />
  ) : (
    <Navigate to='/auth/adminLogin' replace />
  )
}
