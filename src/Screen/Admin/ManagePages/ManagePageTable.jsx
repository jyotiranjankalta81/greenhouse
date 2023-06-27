import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosInstance, { imageBacked } from '../../../API/axiosInstance'
import { toast } from 'react-toastify'
import {
  getblog,
  getInTouchHome,
  getInTouchhome,
  getOnBoarding,
  getOnboarding,
  getStarted,
  Section1
} from '../../../Redux/features/adminSlice'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import EditIcon from '@mui/icons-material/Edit'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { OnBoardInput } from '../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../UtilComponents/inputs/PlainTextArea'
import { useForm } from 'react-hook-form'
import CardMedia from '@mui/material/CardMedia'

export default function ManagePageTable () {
  const dispatch = useDispatch()
  const { section1 } = useSelector(state => state.admin)
  const [rows, setrow] = React.useState([])
  const [open, setOpen] = React.useState(true)

  React.useEffect(() => {
    dispatch(Section1())
    dispatch(getInTouchHome())
    dispatch(getOnBoarding())
    dispatch(getStarted())
  }, [])

  React.useEffect(() => {
    if (section1?.length !== 0) {
      // const datas = []
      // section1.forEach((data, index) => {
      //   datas.push({
      //     id: index + 1,
      //     SE_ID: data.SE_ID,
      //     TITLE: data.TITLE,
      //     CONTENT: data.CONTENT,
      //     NAME: data.NAME,
      //     IMAGE: imageBacked + data.IMAGE
      //   })
      // })
      // setrow(datas)

      var sectiondata = []
      var newArray = section1.filter(function (el) {
        return el.NAME == 'HOME_CROUSEL'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            IMAGE: imageBacked + data.IMAGE,
            TITLE: data.TITLE,
            CONTENT: data.CONTENT,
            NAME: data.NAME
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section1])

  const columns = [
    {
      field: 'id',
      headerName: 'SI No',
      headerClassName: 'super-app-theme--header'
    },
    {
      field: 'TITLE',
      headerName: 'Title',
      headerClassName: 'super-app-theme--header',
      width: 220,
      editable: true
    },
    {
      field: 'NAME',
      headerName: 'Name',
      headerClassName: 'super-app-theme--header',
      width: 220,
      editable: true
    },
    {
      field: 'CONTENT',
      headerName: 'Content',
      headerClassName: 'super-app-theme--header',
      width: 250,
      editable: true
    },
    {
      field: 'IMAGE',
      headerName: 'Image',
      headerClassName: 'super-app-theme--header',
      width: 250,
      renderCell: params => imagecell(params),
      editable: true
    },
    {
      headerName: 'Actions',
      headerClassName: 'super-app-theme--header',
      renderCell: params => actionElement(params)
    }
  ]

  const imagecell = params => {
    console.log(params)
    return (
      <div className='action-wrapper'>
        <img
          crossorigin='anonymous'
          src={imageBacked + params.row.IMAGE}
          style={{ width: '100%', height: '100%' }}
          alt=''
        />
      </div>
    )
  }

  const handleDelete = params => {
    if (window.confirm('Do You really want to delete blog') === true) {
      axiosInstance
        .delete('main/section1?SE_ID=' + params.row.SE_ID)
        .then(res => {
          if (res.data.success) {
            toast.success(res.data.message)
            // window.location.reload();
            setTimeout(() => {
              window.location.reload()
            }, 3000)
          }
        })
    }
    console.log(params)
  }

  const actionElement = params => (
    <div className='action-wrapper'>
      <DeleteIcon
        onClick={() => handleDelete(params)}
        className='action-icon'
      />
    </div>
  )

  return (
    <>
      {rows.length !== 0 && (
        <Box
          sx={{
            height: 400,
            width: '100%',
            '& .super-app-theme--header': {
              backgroundColor: '#CADEF5'
            }
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      )}
    </>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

// function EditModal ({ param, Opens }) {
//   console.log(param.row.id)
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm()

//   let initialStates = {
//     TITLE: param.row.TITLE,
//     CONTENT: param.row.CONTENT,
//     IMAGE: param.row.IMAGE,
//     NAME: param.row.NAME
//   }

//   const [formdata, setformdata] = React.useState(initialStates)
//   const [file, setFile] = React.useState(initialStates.IMAGE)
//   const handleChange = e => setFile(URL.createObjectURL(e.target.files[0]))
//   const onChangeText = (name, value) => {
//     setformdata({ ...formdata, [name]: value })
//   }
//   // console.log(formdata)

//   const onSubmit = e => {
//     e.preventDefault()
//     if (file === initialStates.IMAGE) {
//       const response = fetch(file)
//         .then(res => res.blob())
//         .then(blob => {
//           const name = file.split('/').pop()
//           formdata.IMAGE = new File([blob], [name], { type: blob.type })
//           console.log(formdata.IMAGE)
//         })
//     }

//     const formData = new FormData()
//     formData.append('SE_ID', param.row.SE_ID)
//     formData.append('TITLE', formdata.TITLE)
//     formData.append('CONTENT', formdata.CONTENT)
//     formData.append('IMAGE', formdata.IMAGE)
//     formData.append('NAME', formdata.NAME)

//     axiosInstance
//       .put('main/section1', formData)
//       .then(res => {
//         if (res.data.success) {
//           toast.success(res.data.message)
//           // window.location.reload();
//           setTimeout(() => {
//             window.location.reload()
//           }, 3000)
//         } else {
//           toast.error(res.data.message)
//         }
//       })
//       .catch(err => {
//         toast.error(err.response.data.message)
//       })
//   }
//   const handleClose = () => Opens(false)

//   return (
//     <div style={{ outline: 'none' }}>
//       <Modal
//         open={Opens}
//         onClose={handleClose}
//         aria-labelledby='modal-modal-title'
//         aria-describedby='modal-modal-description'
//       >
//         <Box sx={style}>
//           <div className='section_container'>
//             <form className='crousel_section_container'>
//               <Typography id='modal-modal-title' variant='h6' component='h2'>
//                 Text in a modal
//               </Typography>
//               <OnBoardInput
//                 label='TiTle'
//                 value={formdata.TITLE}
//                 onChange={e => onChangeText('TITLE', e.target.value)}
//               />
//               <OnBoardTextArea
//                 label='Content'
//                 value={formdata.CONTENT}
//                 onChange={e => onChangeText('CONTENT', e.target.value)}
//               />

//               <label htmlFor='' className='crousel_background_image'>
//                 Image:
//               </label>

//               <Button
//                 sx={{
//                   width: '100%',
//                   height: '6vh',
//                   justifyContent: 'space-around',
//                   textTransform: 'none',
//                   borderRadius: '10px',
//                   border: '1px dashed #456bb4',
//                   background: '#FFFFFF',
//                   color: '#000000',
//                   '&:hover': {
//                     backgroundColor: '#e6f1fd',
//                     border: '1px dashed #456bb4'
//                   }
//                 }}
//                 color='warning'
//                 variant='outlined'
//                 component='label'
//               >
//                 <CloudUploadIcon
//                   sx={{
//                     color: formdata.IMAGE ? 'green' : '#456bb4',
//                     transform: 'scale(1.5)'
//                   }}
//                 />

//                 {formdata.IMAGE
//                   ? 'image selected'
//                   : 'Drag and Drop or Browse File'}
//                 <input
//                   hidden
//                   accept='image/*'
//                   multiple
//                   type='file'
//                   onChange={e => {
//                     onChangeText('IMAGE', e.target.files[0])
//                     handleChange(e)
//                   }}
//                 />
//               </Button>
//               <img
//                 src={file}
//                 crossorigin='anonymous'
//                 style={{
//                   width: '100%',
//                   height: '250px',
//                   border: '2px solid black',
//                   borderRadius: '10px'
//                 }}
//                 alt='none'
//               />
//               <Button
//                 type='buttton'
//                 variant='contained'
//                 className='profile_btn'
//                 sx={{
//                   width: '45%',
//                   display: 'flex',
//                   margin: '1rem auto 0rem auto',
//                   borderRadius: '10px',
//                   textTransform: 'none',
//                   color: '#FFFFFF',
//                   background: '#3B85D7',
//                   '&:hover': {
//                     background: '#3B85D7'
//                   }
//                 }}
//                 onClick={onSubmit}
//               >
//                 Create Blog
//               </Button>
//             </form>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   )
// }
