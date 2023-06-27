import * as React from 'react'
import './CrouselSection.css'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../../../API/axiosInstance'
import { toast } from 'react-toastify'

const CrouselSection = props => {
  console.log(props.datas[0].link)
  const [isTitle, setisTitle] = React.useState('')
  const [isContent, setisContent] = React.useState('')
  const [isFile, setisFile] = React.useState(null)

  const handleSubmit = () => {
    if (isTitle == '' || isContent == '' || isFile == null) {
      toast.error('Please fill all the fields')
      return false
    }
    const formdata = new FormData()
    formdata.append('TITLE', isTitle)
    formdata.append('CONTENT', isContent)
    formdata.append('IMAGE', isFile)
    formdata.append('NAME', `${props.datas[0].name}`)

    for (var pair of formdata.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    axiosInstance.post(`main/${props.datas[0].link}`, formdata).then(res => {
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
            label='Title:'
            onChange={e => setisTitle(e.target.value)}
          />
          <OnBoardTextArea
            label='Content'
            onChange={e => setisContent(e.target.value)}
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

            {isFile ? isFile.name : 'Drag and Drop or Browse File'}
            <input
              hidden
              accept='image/*'
              multiple
              type='file'
              onChange={e => setisFile(e.target.files[0])}
            />
          </Button>

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
            onClick={handleSubmit}
          >
            Create Blog
          </Button>
        </div>
      </div>
    </>
  )
}

export default CrouselSection
