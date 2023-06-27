import { Avatar } from '@mui/material'
import React from 'react'
import { PlainInput } from '../../../UtilComponents/inputs/PlainInput'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './adminLogin.css'
import { userLogin } from '../../../Redux/features/authenticationSlice'

const initialState = {
  EMAIL: '',
  PASSWORD: ''
}
const AdminLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formdata, setFormData] = React.useState(initialState)

  const onFormSubmit = e => {
    e.preventDefault()
    dispatch(userLogin({ formdata, navigate }))
  }

  const handleFieldChange = e => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='admin_login_container'>
        <form action='' className='admin_login_form' onSubmit={onFormSubmit}>
          <div className='admin_login_main_container'>
            <Avatar sx={{ width: 85, height: 85 }} />
            <PlainInput
              label='Username'
              name='EMAIL'
              onChange={handleFieldChange}
            />
            <PlainInput
              label='Password'
              type='password'
              name='PASSWORD'
              onChange={handleFieldChange}
            />
            <div className='admin_Login_submit'>
              {/* <Link to='/admin-panel'> */}
              <button className='admin_signup' onClick={onFormSubmit}>
                Submit
              </button>
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminLogin
