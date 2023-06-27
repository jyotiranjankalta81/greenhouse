import React from 'react'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Avatar } from '@mui/material'
import axiosInstance from '../../../../../API/axiosInstance'
import { toast } from 'react-toastify'
import CustomerReviewsTable from './CustomerReviesTable'

const CustomerRevies = () => {
  const [formdata, setformdata] = React.useState({
    NAME: '',
    DESIGNATION: '',
    IMAGE: '',
    CONTENT: ''
  })
  const [file, setFile] = React.useState(null)
  const handleChange = e => setFile(URL.createObjectURL(e.target.files[0]))
  const onChangeText = (name, value) => {
    setformdata({ ...formdata, [name]: value })
  }
  const handleSubmit = () => {
    console.log(formdata)
    const formData = new FormData()
    formData.append('NAME', formdata.NAME)
    formData.append('DESIGNATION', formdata.DESIGNATION)
    formData.append('IMAGE', formdata.IMAGE)
    formData.append('CONTENT', formdata.CONTENT)

    axiosInstance
      .post(`main/customer-reviews`, formData)
      .then(res => {
        if (res.data.success == 1) {
          toast.success(res.data.message)

          // setTimeout(() => {
          //   window.location.reload()
          // }, 3000)
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
        <div className='crousel_section_container'>
          <h3 style={{ color: 'white' }}>Customer Reviews</h3>
          <Button
            sx={{
              justifyContent: 'space-around',
              textTransform: 'none',
              border: 'none',
              color: '#000000',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              '&:hover': {
                border: 'none',
                outline: 'none'
              }
            }}
            color='warning'
            variant='outlined'
            component='label'
          >
            <Avatar
              src={file}
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                '&:hover': {
                  border: 'none',
                  outline: 'none'
                }
              }}
            />
            {/* // {isFile ? isFile.name : 'Drag and Drop or Browse File'} */}
            <input
              hidden
              accept='image/*'
              multiple
              type='file'
              onChange={e => {
                handleChange(e)
                onChangeText('IMAGE', e.target.files[0])
              }}
            />
            <CloudUploadIcon
              sx={{
                // color: isFile ? 'green' : '#456bb4',
                transform: 'scale(1.5)',
                margin: '-1.5rem 0rem 0rem -1.8rem',
                display: file ? 'none' : 'block'
              }}
            />
          </Button>
          <OnBoardInput
            label='Name'
            onChange={e => onChangeText('NAME', e.target.value)}
          />
          <OnBoardInput
            label='Desiganation'
            onChange={e => onChangeText('DESIGNATION', e.target.value)}
          />
          <OnBoardTextArea
            label='Review Content'
            onChange={e => onChangeText('CONTENT', e.target.value)}
          />
          <div className='btn_section'>
            <button className='section_submit_btn' onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <br />
      <CustomerReviewsTable />
    </>
  )
}

export default CustomerRevies
