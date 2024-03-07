import { Box, useTheme, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { tokens } from '../../../theme';
import Header from "../../../components/AdminPage/Header";
import { AdminPanelSettingsOutlined, LockOpenOutlined } from '@mui/icons-material';

// Modal
import ModalUpdate from "../../../components/AdminPage/Users/ModalUpdate";
import ModalDelete from "../../../components/AdminPage/Users/ModalDelete";

// Action
import { getAllUserAction } from '../../../store/actions/admin/apiRequest.action';
import { handleOpenModalUpdateUserAction, handleOpenModalDeleteUserAction } from '../../../store/actions/admin/modal.action';


const Users = () => {
  const dispatch = useDispatch();
  const { listUser } = useSelector(reduxData => reduxData.userAdminReducer);
  const { pending, userList, isError } = listUser;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [])

  // Handle View Detail User
  const handleViewDetail = (info) => {
    dispatch(handleOpenModalUpdateUserAction(info));
  }


  const columns = [
    {
      field: "_id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      headerAlign: "left",
      align: "left",
      flex: 1
    },
    {
      field: "isAdmin",
      headerName: "Role",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row: { isAdmin } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              isAdmin === true ? colors.greenAccent[600] : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {isAdmin ? <AdminPanelSettingsOutlined /> : <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {isAdmin ? 'admin' : 'user'}
            </Typography>
          </Box>
        )
      }
    },
    {
      field: "action",
      headerAlign: 'center',
      headerName: "Actions",
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
              onClick={() => handleViewDetail(row)}
            >
              View Detail
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(handleOpenModalDeleteUserAction(row._id))}
            >
              Delete
            </Button>
          </Box>
        )
      }
    },
  ]

  return (
    <Box m='20px'>
      <Header title="USERS" subtitle="Managing List Users" />

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
                userList &&
                <DataGrid
                  rowHeight={60}
                  rows={userList}
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

export default Users;