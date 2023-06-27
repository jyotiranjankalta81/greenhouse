import * as React from 'react'
import './Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import { Link } from 'react-router-dom'
import { PlainInput } from '../../UtilComponents/inputs/PlainInput'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../src/API/axiosInstance'
import { toast } from 'react-toastify'

function Footer () {
  const [formdata, setFormdata] = React.useState({
    EMAIL: ''
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    axiosInstance.post('main/subscribe', data).then(res => {
      if (res.data.success == 1) {
        toast.success(res.data.message)
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      } else {
        toast.error(res.data.message)
      }
    })
  }

  return (
    <>
      <div className='footer_containers'>
        <div className='footer_sub_container'>
          <div className='footer_sections'>© 2023 Used Book Haven</div>
          <div className='footer_sections_right'>
            <h6>Contact Us Below!</h6>
            <p>(717)-557-1786</p>
            <p>usedbookhaven@gmail.com</p>
            <a
              href='/auth/adminLogin'
              style={{
                listStyle: 'none',
                textDecoration: 'none',
                color: '#FFFFFF'
              }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
