import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosInstance, { imageBacked } from '../../../../API/axiosInstance'
import { toast } from 'react-toastify'
import { getblog, getBlogs } from '../../../../Redux/features/adminSlice'
import { getAllBlog } from '../../../../Redux/features/commonSlice'
import { useDispatch } from 'react-redux'

export default function BlogsTable () {
  const dispatch = useDispatch()
  const { blogs } = useSelector(state => state.admin)
  const [rows, setrow] = React.useState([])

  React.useEffect(() => {
    dispatch(getblog())
  }, [])

  React.useEffect(() => {
    if (blogs?.length !== 0) {
      const datas = []
      blogs.forEach((data, index) => {
        datas.push({
          id: index + 1,
          HEADING: data.HEADING,
          CONTENT: data.CONTENT,
          TAGS: data.TAGS,
          IMAGE: imageBacked + data.IMAGE
        })
      })
      setrow(datas)
    }
  }, [blogs])

  const columns = [
    {
      field: 'id',
      headerName: 'SI No',
      headerClassName: 'super-app-theme--header'
    },
    {
      field: 'HEADING',
      headerName: 'Title',
      headerClassName: 'super-app-theme--header',
      width: 220,
      editable: true
    },
    {
      field: 'TAGS',
      headerName: 'Tag',
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
    return (
      <div className='action-wrapper'>
        <img src={imageBacked + params.row.IMAGE} alt='' />
      </div>
    )
  }

  const handleDelete = params => {
    if (window.confirm('Do You really want to delete blog') === true) {
      axiosInstance
        .delete('main/mycreate-blog?BLOG_ID=' + params.row.id)
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

  const handleedit = params => {}

  const actionElement = params => (
    <div className='action-wrapper'>
      {/* <RemoveRedEyeIcon
        onClick={() => handleedit(params)}
        className="action-icon"
      /> */}
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
