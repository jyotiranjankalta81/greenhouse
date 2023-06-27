import React from 'react'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../../../API/axiosInstance'
import { toast } from 'react-toastify'
import FaqSectionTable from './FaqSectionTable'

const FaqSection2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [formdata, setformdata] = React.useState({
    HEADING: '',
    CONTENT: '',
    NAME: 'FAQ_SECTION2'
  })

  const onSubmit = data => {
    formdata.HEADING = data.HEADING
    formdata.CONTENT = data.CONTENT
    console.log(formdata)
    axiosInstance
      .post(`main/section3`, formdata)
      .then(res => {
        if (res.data.success == 1) {
          toast.success(res.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 3000)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch(err => {
        toast.error(err.message)
      })
  }
  return (
    <>
      <div className='section_container'>
        <form
          className='crousel_section_container'
          onSubmit={handleSubmit(onSubmit)}
        >
          <OnBoardInput
            label='Question:'
            name='HEADING'
            errors={errors}
            validation={{
              ...register('HEADING', {
                required: 'Question is required'
              })
            }}
          />
          <OnBoardTextArea
            label='Answer:'
            name='CONTENT'
            errors={errors}
            validation={{
              ...register('CONTENT', {
                required: 'Answer is required'
              })
            }}
          />

          <div className='btn_section'>
            <button
              className='section_submit_btn'
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <br />
      <FaqSectionTable />
    </>
  )
}

export default FaqSection2
