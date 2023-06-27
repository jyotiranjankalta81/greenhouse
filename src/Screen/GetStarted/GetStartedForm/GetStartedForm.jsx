import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { OneLineInput } from '../../../UtilComponents/inputs/PlainInput'
import '../getstartedform.css'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axiosInstance from '../../../API/axiosInstance'

let initialState = {
  FIRSTNAME: '',
  LASTNAME: '',
  EMAIL: '',
  PHONE: ''
}

const GetStartedForm = () => {
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
  const onSubmit = formdata => {
    axiosInstance.post('main/get-started', formdata).then(res => {
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
      <div className='form_container'>
        <div className='main_form_container'>
          <p data-aos='fade-down'>
            You can think of Beklom Technologies as a one-stop shop for all of
            your outsourced company development needs. Web development, Social
            Media management, US Taxation, Book-keeping, Technical/Non-Technical
            recruitment, Graphic Designing, and Lead generation are all areas in
            which we specialize. After that, we perform all of the cold outreach
            to qualify prospects, generate interest, and open sales
            conversations for you.
          </p>
          <form
            className='form_get_started'
            onSubmit={handleSubmit(onSubmit)}
            data-aos='fade-down-left'
          >
            <div className='get_input_form'>
              <OneLineInput
                label='First Name'
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
                label='Email'
                placeholder='Enter Email'
                name='EMAIL'
                errors={errors}
                validation={{
                  ...register('EMAIL', {
                    required: 'Email is required',
                    maxLength: {
                      value: 50,
                      message: 'Email should not be more than 50 characters'
                    },
                    minLength: {
                      value: 5,
                      message: 'Email should not be less than 5 characters'
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
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
                    maxLength: {
                      value: 10,
                      message: 'Phone number must be 10 digits'
                    },
                    minLength: {
                      value: 10,
                      message: 'Phone number must be 10 digits'
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Phone number must be numeric'
                    }
                  })
                }}
              />
            </div>
            <div className='submit_get_started_form'>
              <button
                className='sumit_contact_form'
                onClick={handleSubmit(onSubmit)}
                data-aos='zoom-out'
              >
                Send Message{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default GetStartedForm
