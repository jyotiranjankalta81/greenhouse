import React from 'react'
import Footer from '../../components/Footer/Footer'
import { OneLineInput } from '../../UtilComponents/inputs/PlainInput'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import './onboard.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getInTouch } from '../../Redux/features/commonSlice'
import { toast } from 'react-toastify'
import axiosInstance from '../../API/axiosInstance'

const OnBoardPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const dispatch = useDispatch()
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [about, setAbout] = React.useState('')
  const [bodyFile, setBodyFile] = React.useState(null)

  const handleOnClickSubmit = e => {
    const formData = new FormData()
    formData.append('FIRSTNAME', firstName)
    formData.append('LASTNAME', lastName)
    formData.append('EMAIL', email)
    formData.append('ABOUT', about)
    formData.append('BODY_FILE', bodyFile)
    console.log(bodyFile)
    console.log([...formData])
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }
    axiosInstance.post('main/get-in-touch', formData).then(res => {
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
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intros'>
            <h1>Onboarding</h1>
            <p>
              Leading Resource for Recruitment in Technical and Non-Technical
              backgrounds !
            </p>
          </div>
          <div className='right_intros'>
            <img src='/Images/Home/onboardheaderbg.png' alt='' />
          </div>
        </div>
      </div>
      <div className='onboard_form_container'>
        <div className='onboard_form_main_container'>
          <p>Please fill the folowing details !</p>
          <div className='onboard_form_content'>
            <div className='onboard_input_section'>
              <OneLineInput
                label='First Name'
                placeholder='Enter First Name'
                name='FIRSTNAME'
                onChange={e => setFirstName(e.target.value)}
              />
              <OneLineInput
                label='Last Name'
                placeholder='Enter Last Name'
                name='LASTNAME'
                onChange={e => setLastName(e.target.value)}
              />
              <OneLineInput
                label='Email'
                placeholder='Enter Email'
                type='email'
                name='EMAIL'
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='file_section'>
              <OneLineInput
                label='About Your Self'
                placeholder='Write about your self'
                onChange={e => setAbout(e.target.value)}
                name='ABOUT'
              />
              <Button
                sx={{
                  width: '100%',
                  height: '7vh',
                  justifyContent: 'space-around',
                  textTransform: 'none',
                  border: '1px dashed #456bb4',
                  background: '#e6f1fd',
                  color: '#000000',
                  '&:hover': {
                    backgroundColor: '#e6f1fd',
                    border: '1px dashed #456bb4'
                  }
                }}
                color='warning'
                variant='outlined'
                component='label'
              >
                <CloudUploadIcon
                  sx={{
                    color: bodyFile ? 'green' : '#456bb4'
                  }}
                />

                {bodyFile ? bodyFile.name : 'Drag and Drop or Browse File'}
                <input
                  hidden
                  accept='image/*'
                  multiple
                  type='file'
                  name='BODY_FILE'
                  onChange={e => setBodyFile(e.target.files[0])}
                />
              </Button>
            </div>
            <br />
            <br />
            <div className='submit_get_started_form'>
              <button
                className='sumit_contact_form'
                onClick={handleOnClickSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OnBoardPage
