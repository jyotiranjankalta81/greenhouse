import React from 'react'
import { OnBoardInput } from '../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../UtilComponents/inputs/PlainTextArea'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import axiosInstance, { imageBacked } from '../../../../API/axiosInstance'
import { toast } from 'react-toastify'

const HeaderSection = props => {
  console.log(props)

  const [formdata, setformdata] = React.useState({})
  const [isFile, setisFile] = React.useState(null)
  const [isImage, setisImage] = React.useState(null)
  const handleChange = e => {
    // onChangeText('IMAGE', e.target.files[0])
    setisImage(e.target.files[0])
    setisFile(URL.createObjectURL(e.target.files[0]))
  }

  const onChangeText = (name, value) => {
    setformdata({ ...formdata, [name]: value })
  }

  React.useEffect(() => {
    setformdata({
      SE_ID: props?.rows[0].SE_ID,
      TITLE: props?.rows[0].TITLE,
      CONTENT: props?.rows[0].CONTENT,
      NAME: props?.rows[0].NAME,
      IMAGE: props?.rows[0].IMAGE
    })
    setisFile(imageBacked + props?.rows[0].IMAGE)
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
    if (isFile !== imageBacked + props.rows[0].IMAGE) {
      formdata.IMAGE = isImage
    }
    const formData = new FormData()
    formData.append('SE_ID', formdata.SE_ID)
    formData.append('TITLE', formdata.TITLE)
    formData.append('CONTENT', formdata.CONTENT)
    formData.append('IMAGE', formdata.IMAGE)
    formData.append('NAME', formdata.NAME)

    axiosInstance
      .put('main/section1', formData)
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
        toast.error(err.response.data.message)
      })
  }
  return (
    <>
      <div className='section_container'>
        <div className='crousel_section_container'>
          <OnBoardInput
            label='Title'
            name='TITLE'
            value={formdata.TITLE}
            onChange={e => onChangeText('TITLE', e.target.value)}
          />
          <OnBoardTextArea
            label='Content'
            value={formdata.CONTENT}
            name='CONTENT'
            onChange={e => onChangeText('CONTENT', e.target.value)}
          />
          <label htmlFor='' className='crousel_background_image'>
            Image:
          </label>
          <Button
            sx={{
              width: '100%',
              height: '6vh',
              justifyContent: 'space-around',
              textTransform: 'none',
              borderRadius: '10px',
              border: '1px dashed #456bb4',
              background: '#FFFFFF',
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
                color: isFile ? 'green' : '#456bb4',
                transform: 'scale(1.5)'
              }}
            />
            <>
              {formdata.IMAGE ? formdata.IMAGE : 'Drag and Drop or Browse File'}
            </>
            <input
              hidden
              accept='image/*'
              multiple
              type='file'
              name='IMAGE'
              onChange={e => {
                handleChange(e)
                // onChangeText('IMAGE', e.target.files[0])
              }}
            />
          </Button>
          <img
            src={isFile ? isFile : ''}
            crossorigin='anonymous'
            style={{
              width: '100%',
              height: '250px',
              border: '2px solid black',
              borderRadius: '10px',
              display: isFile ? 'block' : 'none'
            }}
            alt='none'
          />

          <Button
            type='buttton'
            variant='contained'
            className='profile_btn'
            sx={{
              width: '45%',
              display: 'flex',
              margin: '1rem auto 0rem auto',
              borderRadius: '10px',
              textTransform: 'none',
              color: '#FFFFFF',
              background: '#3B85D7',
              '&:hover': {
                background: '#3B85D7'
              }
            }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  )
}

export default HeaderSection
