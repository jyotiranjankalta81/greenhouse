import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import EditIcon from '@mui/icons-material/Edit'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useForm } from 'react-hook-form'
import CardMedia from '@mui/material/CardMedia'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { BasicSection3 } from '../../../../../Redux/features/adminSlice'
import axiosInstance, { imageBacked } from '../../../../../API/axiosInstance'

export default function FaqSectionTable () {
  const dispatch = useDispatch()
  const { section3 } = useSelector(state => state.admin)
  const [rows, setrow] = React.useState([])
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    dispatch(BasicSection3())
  }, [])

  React.useEffect(() => {
    if (section3?.length !== 0) {
      var sectiondata = []
      var newArray = section3.filter(function (el) {
        return el.NAME == 'FAQ_SECTION2'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            HEADING: data.HEADING,
            CONTENT: data.CONTENT,
            NAME: data.NAME
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section3])

  const columns = [
    {
      field: 'id',
      headerName: 'SI No',
      headerClassName: 'super-app-theme--header'
    },
    {
      field: 'HEADING',
      headerName: 'Heading',
      headerClassName: 'super-app-theme--header',
      width: 250,
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
      field: 'NAME',
      headerName: 'Name',
      headerClassName: 'super-app-theme--header',
      width: 220,
      editable: true
    },
    {
      headerName: 'Actions',
      headerClassName: 'super-app-theme--header',
      renderCell: params => actionElement(params)
    }
  ]

  const imagecell = params => {
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
        .delete('main/customer-reviews?RE_ID=' + params.row.id)
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
