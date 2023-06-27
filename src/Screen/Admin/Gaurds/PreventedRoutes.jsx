import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectAuthToken } from '../../../Redux/features/authenticationSlice'

export default function PreventedRoutes () {
  const token = useSelector(selectAuthToken)

  return !token ? <Outlet /> : <Navigate to='/' replace />
}
