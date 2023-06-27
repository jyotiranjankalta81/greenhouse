import * as React from 'react'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import '../CrouselSection/CrouselSection.css'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../../../API/axiosInstance'
import { toast } from 'react-toastify'

const Section2 = props => {
  console.log(props)
  const [formdata, setFormdata] = React.useState({})

  React.useEffect(() => {
    setFormdata({
      HEADING: props.rows[0].HEADING,
      TITLE: props.rows[0].TITLE,
      CONTENT: props.rows[0].CONTENT,
      NAME: props.rows[0].NAME,
      SE_ID: props.rows[0].SE_ID
    })
  }, [props.rows])

  const onSubmit = e => {
    e.preventDefault()

    axiosInstance.put('main/section2', formdata).then(res => {
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
      <div className='section_container'>
        <div className='crousel_section_container'>
          <OnBoardInput
            label='Heading'
            value={formdata.HEADING}
            onChange={e =>
              setFormdata({ ...formdata, HEADING: e.target.value })
            }
          />
          <OnBoardInput
            label='Title'
            value={formdata.TITLE}
            onChange={e => setFormdata({ ...formdata, TITLE: e.target.value })}
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

export default Section2
