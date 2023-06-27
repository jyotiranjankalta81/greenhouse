import React from 'react'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import '../CrouselSection/CrouselSection.css'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../../../API/axiosInstance'
import { toast } from 'react-toastify'

const Section3 = props => {
  const [formdata, setFormdata] = React.useState({
    HEADING: props.rows[0].HEADING,
    CONTENT: props.rows[0].CONTENT,
    NAME: props.rows[0].NAME,
    SE_ID: props.rows[0].SE_ID
  })

  const onSubmit = e => {
    e.preventDefault()
    axiosInstance
      .put('/main/section3', formdata)
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
        toast.error('Please try again later')
      })
  }
  return (
    <>
      <div className='section_container'>
        <div className='crousel_section_container'>
          <OnBoardInput
            label='Title'
            value={formdata.HEADING}
            onChange={e =>
              setFormdata({ ...formdata, HEADING: e.target.value })
            }
          />
          <OnBoardTextArea
            label='Content'
            value={formdata.CONTENT}
            onChange={e =>
              setFormdata({ ...formdata, CONTENT: e.target.value })
            }
          />
          <div className='btn_section'>
            <button className='section_submit_btn' onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3
