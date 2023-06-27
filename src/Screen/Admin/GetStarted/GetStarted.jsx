import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosInstance, { imageBacked } from '../../../API/axiosInstance'
import { toast } from 'react-toastify'
import { getStarted } from '../../../Redux/features/adminSlice'
import { useDispatch } from 'react-redux'

export default function GetStarted () {
  const dispatch = useDispatch()
  const { getstarted } = useSelector(state => state.admin)
  console.log(getstarted)
  const [rows, setrow] = React.useState([])
  React.useEffect(() => {
    dispatch(getStarted())
  }, [])
  React.useEffect(() => {
    if (getstarted?.length !== 0) {
      const datas = []
      getstarted.forEach((data, index) => {
        datas.push({
          id: index + 1,
          FIRSTNAME: data.FIRSTNAME,
          LASTNAME: data.LASTNAME,
          PHONE: data.PHONE,
          EMAIL: data.EMAIL
        })
      })
      setrow(datas)
    }
  }, [getstarted])

  const columns = [
    {
      field: 'id',
      headerName: 'SI No',
      headerClassName: 'super-app-theme--header'
    },
    {
      field: 'FIRSTNAME',
      headerName: 'First Name',
      headerClassName: 'super-app-theme--header',
      width: 150,
      editable: true
    },
    {
      field: 'LASTNAME',
      headerName: 'Last Name',
      headerClassName: 'super-app-theme--header',
      width: 150,
      editable: true
    },
    {
      field: 'EMAIL',
      headerName: 'Email',
      headerClassName: 'super-app-theme--header',
      width: 220,
      editable: true
    },
    {
      field: 'PHONE',
      headerName: 'Contact No',
      headerClassName: 'super-app-theme--header',
      width: 150,
      editable: true
    },
    {
      headerName: 'Actions',
      headerClassName: 'super-app-theme--header',
      renderCell: params => actionElement(params)
    }
  ]

  const handleDelete = params => {
    if (window.confirm('Do You really want to delete this row') === true) {
      axiosInstance
        .delete('main/delete-get-started?GS_ID=' + params.row.id)
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
      {rows?.length !== 0 && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      )}
    </Box>
  )
}
