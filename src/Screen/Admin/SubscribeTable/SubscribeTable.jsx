import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { subscribeMail } from '../../../Redux/features/adminSlice'
import DeleteIcon from '@mui/icons-material/Delete'
import axiosInstance, { imageBacked } from '../../../API/axiosInstance'
import { toast } from 'react-toastify'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'

const SubscribeTable = () => {
  const { subscribemail } = useSelector(state => state.admin)
  const [rows, setrow] = React.useState([])
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (subscribemail?.length !== 0) {
      const data = []
      subscribemail.forEach((item, index) => {
        data.push({
          id: index + 1,
          EMAIL: item.EMAIL,
          SB_ID: item.SB_ID,
          TIME: item.createdAt
        })
      })
      setrow(data)
    }
  }, [subscribemail])

  React.useEffect(() => {
    dispatch(subscribeMail())
  }, [])

  console.log(rows)

  const columns = [
    {
      field: 'id',
      headerName: 'SI No',
      //   headerClassName: 'super-app-theme--header',
      width: 180
    },
    {
      field: 'EMAIL',
      headerName: 'EMAIL',
      //   headerClassName: 'super-app-theme--header',
      width: 330,
      editable: true
    },
    {
      field: 'TIME',
      headerName: 'TIME',
      //   headerClassName: 'super-app-theme--header',
      width: 220,
      editable: true
    },
    {
      headerName: 'Actions',
      //   headerClassName: 'super-app-theme--header',
      width: 170,

      renderCell: params => actionElement(params)
    }
  ]

  const actionElement = params => (
    <div className='action-wrapper'>
      <DeleteIcon
        onClick={() => handleDelete(params)}
        className='action-icon'
      />
    </div>
  )

  const handleDelete = params => {
    if (window.confirm('Do You really want to delete blog') === true) {
      axiosInstance
        .delete('main/subscribe?SB_ID=' + params.row.SB_ID)
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

  return (
    <>
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
    </>
  )
}

export default SubscribeTable
