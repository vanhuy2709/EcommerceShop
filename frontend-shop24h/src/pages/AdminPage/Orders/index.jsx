import { Box, useTheme, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { tokens } from '../../../theme';
import Header from "../../../components/AdminPage/Header";

// Action
import { getAllOrderAction } from '../../../store/actions/admin/apiRequest.action';
import {
  handleOpenModalUpdateOrderAction,
  handleOpenModalDeleteOrderAction
} from '../../../store/actions/admin/modal.action';

// Modal
import ModalUpdate from "../../../components/AdminPage/Orders/ModalUpdate";
import ModalDelete from "../../../components/AdminPage/Orders/ModalDelete";

const Orders = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { listOrder } = useSelector(reduxData => reduxData.orderAdminReducer);
  const { pending, orderList, isError } = listOrder;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getAllOrderAction(storageUser.token));
  }, [])

  // const handleViewDetail = (info) => {
  //   dispatch(handleOpenModalUpdateOrderAction(info._id))
  // }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
    },
    {
      field: "user",
      headerName: "User",
      cellClassName: "name-column--cell",
      flex: 1,
      renderCell: ({ row: { user } }) => {
        return (
          <Typography>{user.name}</Typography>
        )
      }
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      type: "number",
      headerAlign: "left",
      align: "center",
      cellClassName: "name-column--cell",
    },
    {
      field: "dateOrdered",
      headerName: "Date Order",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        if (status === 'Pending') {
          return <p
            className="text-white px-7 py-2 rounded-md"
            style={{ backgroundColor: colors.grey[400] }}
          >
            {status}
          </p>
        }
        if (status === 'Processing') {
          return <p
            className="text-white px-7 py-2 rounded-md"
            style={{ backgroundColor: colors.blueAccent[400] }}
          >
            {status}
          </p>
        }
        if (status === 'Delivered') {
          return <p
            className="text-white px-7 py-2 rounded-md"
            style={{ backgroundColor: colors.greenAccent[400] }}
          >
            {status}
          </p>
        }
      }
    },
    {
      field: "action",
      headerName: "Actions",
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            gap="1rem"
          >
            <Button
              variant="contained"
              color="success"
              onClick={() => dispatch(handleOpenModalUpdateOrderAction(row))}
            >
              View Order
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(handleOpenModalDeleteOrderAction(row._id))}
            >
              Delete
            </Button>
          </Box>
        )
      }
    },
  ]

  return (
    <Box m="20px">
      <Header title="ORDERS" subtitle="Managing List Order" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        {
          pending ?
            (<Spin fullscreen />)
            :
            (<>
              {
                orderList &&
                <DataGrid
                  rows={orderList}
                  columns={columns}
                  getRowId={row => row._id}
                  components={{ Toolbar: GridToolbar }}
                />
              }
            </>)
        }
      </Box>

      <ModalUpdate />
      <ModalDelete />
    </Box>
  );
};

export default Orders;