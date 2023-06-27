import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './ContactForm.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import { OneLineInput } from '../../../UtilComponents/inputs/PlainInput'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { contactDetails } from '../../../Redux/features/commonSlice'
import { toast } from 'react-toastify'
import axiosInstance from '../../../API/axiosInstance'

let initialState = {
  FIRSTNAME: '',
  LASTNAME: '',
  EMAIL: '',
  PHONE: '',
  MESSAGE: ''
}

const ContactForm = () => {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const [formdata, setFormdata] = React.useState(initialState)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const dispatch = useDispatch()
  const onSubmit = formdata => {
    // dispatch(contactDetails({ formdata, toast }))
    axiosInstance.post('main/contact-us', formdata).then(res => {
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
      <div className='contact_form_container'>
        <div className='contact_form_main_container'>
          <div className='left_contact_form' data-aos='fade-down-right'>
            <div className='top_contact_section'>
              <h4>Contact Us</h4>
              <p>
                Feel free to reach out to us with any further inquiries and one
                of our team members will get back to you within 24 hours
              </p>
            </div>
            <div className='middle_contact_section'>
              <p>
                <CallIcon /> +0123 4567 8910
              </p>
              <p>
                <MailIcon /> hell@hellx.com
              </p>
              <p>
                <LocationOnIcon /> 102 Street 2714 Don
              </p>
            </div>
            <div className='bottom_contact_section'>
              <div className='left_bottom_contact'>
                <div className='icon_image'>
                  <img src='/Images/Contact/instagram.png' alt='' />
                </div>
                <div className='icon_image'>
                  <img src='/Images/Contact/facebook.png' alt='' />
                </div>
                <div className='icon_image'>
                  <img src='/Images/Contact/linkedin.png' alt='' />
                </div>
                <div className='icon_image'>
                  <img src='/Images/Contact/twitter.png' alt='' />
                </div>
              </div>
              <div className='right_bottom_contact'>
                <div className='right_inside_sectionn'>
                  <img src='/Images/Contact/MailGif.gif' alt='' />
                </div>
              </div>
            </div>
          </div>
          <form
            className='right_contact_form'
            onSubmit={handleSubmit(onSubmit)}
            data-aos='fade-down-right'
          >
            <div className='top_right_form'>
              <div className='grid_input-row'>
                <OneLineInput
                  label='Full Name'
                  placeholder='Enter First Name'
                  errors={errors}
                  name='FIRSTNAME'
                  validation={{
                    ...register('FIRSTNAME', {
                      required: 'First Name is required'
                    })
                  }}
                />
                <OneLineInput
                  label='Last Name'
                  placeholder='Enter Last Name'
                  errors={errors}
                  name='LASTNAME'
                  validation={{
                    ...register('LASTNAME', {
                      required: 'Last Name is required'
                    })
                  }}
                />
                <OneLineInput
                  label='Phone'
                  placeholder='Enter Phone'
                  errors={errors}
                  name='PHONE'
                  validation={{
                    ...register('PHONE', {
                      required: 'Phone is required',
                      minLength: {
                        value: 10,
                        message: 'Phone number must be 10 digits'
                      },
                      maxLength: {
                        value: 10,
                        message: 'Phone number must be 10 digits'
                      }
                    })
                  }}
                />
                <OneLineInput
                  label='E-mail'
                  placeholder='Enter E-mail'
                  errors={errors}
                  name='EMAIL'
                  validation={{
                    ...register('EMAIL', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })
                  }}
                />
              </div>
              <div className='middle_right_form'>
                <OneLineInput
                  label='Message'
                  placeholder='Write your message '
                  errors={errors}
                  name='MESSAGE'
                  validation={{
                    ...register('MESSAGE', {
                      required: 'Message is required'
                    })
                  }}
                />
              </div>
            </div>
            <div className='last_form_section'>
              <button
                className='sumit_contact_form'
                onClick={handleSubmit(onSubmit)}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
