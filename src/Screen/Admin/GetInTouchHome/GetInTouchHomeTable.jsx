import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosInstance, { imageBacked } from '../../../API/axiosInstance'
import { toast } from 'react-toastify'
import { getblog, getInTouchHome } from '../../../Redux/features/adminSlice'
import { useDispatch } from 'react-redux'

export default function GetInTouchHomeTable () {
  const dispatch = useDispatch()
  const { getintouchhome } = useSelector(state => state.admin)
  const [rows, setrow] = React.useState([])
  React.useEffect(() => {
    dispatch(getInTouchHome())
  }, [])
  React.useEffect(() => {
    if (getintouchhome?.length !== 0) {
      const datas = []
      getintouchhome.forEach((data, index) => {
        datas.push({
          id: index + 1,
          NAME: data.NAME,
          EMAIL: data.EMAIL,
          CONTACTUS: data.CONTACTUS,
          ADDRESS: data.ADDRESS,
          MESSAGE: data.MESSAGE
        })
      })
      setrow(datas)
    }
  }, [getintouchhome])

  const columns = [
    {
      field: 'id',
      headerName: 'SI No',
      headerClassName: 'super-app-theme--header'
    },
    {
      field: 'NAME',
      headerName: 'Name',
      headerClassName: 'super-app-theme--header',
      width: 220,
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
      field: 'CONTACTUS',
      headerName: 'Contact No',
      headerClassName: 'super-app-theme--header',
      width: 150,
      editable: true
    },
    {
      field: 'ADDRESS',
      headerName: 'Address',
      headerClassName: 'super-app-theme--header',
      width: 250,
      editable: true
    },
    {
      field: 'MESSAGE',
      headerName: 'Message',
      headerClassName: 'super-app-theme--header',
      width: 250,
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
        .delete('main/get-in-touch-home?OBH_ID=' + params.row.id)
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
