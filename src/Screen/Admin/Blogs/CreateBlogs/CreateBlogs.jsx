import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
  PlainInput,
  OneLineInput
} from '../../../../UtilComponents/inputs/PlainInput'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import './CreateBlogs.css'
import axiosInstance from '../../../../API/axiosInstance'
import { toast } from 'react-toastify'

const MailSendingTemplate = ({ onchnage }) => {
  return (
    <div style={{ width: '100%' }}>
      <CKEditor
        style={{ border: '1px solid green' }}
        editor={ClassicEditor}
        data='<p>please write your blog here</p>'
        onReady={editor => {
          console.log('please write your blog here', editor)
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          onchnage(data)
          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          // console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          // console.log("Focus.", editor);
        }}
      />
    </div>
  )
}

const CreateBlogPost = () => {
  const [isheading, setisheading] = useState('')
  const [iscontent, setiscontent] = useState(null)
  const [isFile, setisFile] = useState(null)
  const [tag, settag] = useState('')

  const submitblog = e => {
    e.preventDefault()

    // console.log(isheading, iscontent, isFile);

    // return false;
    const formdata = new FormData()
    formdata.append('HEADING', isheading)
    formdata.append('CONTENT', iscontent)
    formdata.append('TAGS', tag)
    formdata.append('IMAGE', isFile)
    axiosInstance.post('main/create-blog', formdata).then(res => {
      if (res.data.success == 1) {
        toast.success(res.data.message)
        // setTimeout(() => {
        //   window.location.reload()
        // }, 3000)
      } else {
        toast.error(res.data.message)
      }
    })
  }

  return (
    <>
      <div className='create_blogs'>
        <div className='create_blogs1'>
          <h3 style={{ textAlign: 'center' }}>Create Blog Post</h3>
          <OneLineInput
            label='Title:'
            placeholder='Enter Title'
            // value={isheading}
            onChange={e => setisheading(e.target.value)}
          />
          <OneLineInput
            label='Tag:'
            placeholder='Enter Tag'
            onChange={e => settag(e.target.value)}
          />
          <br />
          <Button
            sx={{
              width: '100%',
              height: '7vh',
              justifyContent: 'space-around',
              textTransform: 'none',
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
          <br />
          <label htmlFor=''>Content:</label>
          <MailSendingTemplate onchnage={setiscontent} />
          <Button
            type='buttton'
            variant='contained'
            className='profile_btn'
            sx={{
              width: 'auto',
              display: 'flex',
              margin: '2rem auto 0rem auto',
              textTransform: 'none',
              color: '#FFFFFF',
              background: '#3B85D7',
              '&:hover': {
                background: '#3B85D7'
              }
            }}
            onClick={submitblog}
          >
            Create Blog
          </Button>
        </div>
      </div>
    </>
  )
}

export default CreateBlogPost
