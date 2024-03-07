import { Box, useTheme, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { tokens } from '../../../theme';
import Header from "../../../components/AdminPage/Header";

// Modal
import ModalUpdate from "../../../components/AdminPage/Categories/ModalUpdate";
import ModalDelete from "../../../components/AdminPage/Categories/ModalDelete";

// Action
import { getAllCategoryAction } from '../../../store/actions/admin/apiRequest.action';
import {
  handleOpenModalUpdateCategoryAction,
  handleOpenModalDeleteCategoryAction
} from '../../../store/actions/admin/modal.action';

const Categories = () => {
  const dispatch = useDispatch();
  const { listCategory } = useSelector(reduxData => reduxData.categoryAdminReducer);
  const { pending, categoryList, isError } = listCategory;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [])

  // Open Modal Update Category
  const handleViewDetail = (info) => {
    dispatch(handleOpenModalUpdateCategoryAction(info));
  }
  // Open Delete Modal Category
  const handleDelete = (info) => {
    dispatch(handleOpenModalDeleteCategoryAction(info));
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
      field: "countProduct",
      headerName: "Total Product",
      type: "number",
      headerAlign: "left",
      align: "center",
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
              onClick={() => handleViewDetail(row)}
            >
              View Detail
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(row)}
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
      <Header title="CATEGORIES" subtitle="Managing List Category" />

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
                categoryList &&
                <DataGrid
                  rowHeight={60}
                  rows={categoryList}
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

export default Categories;