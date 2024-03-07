import { Box, useTheme, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

import { tokens } from '../../../theme';
import Header from '../../../components/AdminPage/Header';
import { getAllProductAction } from '../../../store/actions/admin/apiRequest.action';

// Modal
import ModalUpdate from "../../../components/AdminPage/Products/ModalUpdate";
import ModalDelete from "../../../components/AdminPage/Products/ModalDelete";

// Action
import {
  handleOpenModalUpdateProductAction,
  handleOpenModalDeleteProductAction
} from '../../../store/actions/admin/modal.action';

const Products = () => {
  const dispatch = useDispatch();
  const { listProduct } = useSelector(reduxData => reduxData.productAdminReducer);
  const { pending, productList, isError } = listProduct;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  // Get All Product
  useEffect(() => {
    dispatch(getAllProductAction());
  }, [])

  // Handle View Detail Product (Open Modal Update Product)
  const handleViewDetail = (info) => {
    dispatch(handleOpenModalUpdateProductAction(info))
  }
  // Handle Open Modal Delete Product
  const handleDelete = (info) => {
    dispatch(handleOpenModalDeleteProductAction(info._id))
  }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
    },
    {
      field: "image",
      headerName: "Image",
      renderCell: ({ row: { image } }) => {
        return (
          <img src={image} className="w-20 h-20 object-cover" />
        )
      }
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "buyPrice",
      headerName: "Buy Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "promotionPrice",
      headerName: "Promotion Price",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Typography>{row.category.name}</Typography>
        )
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
      <Header title="PRODUCTS" subtitle="Managing List Products" />
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
                productList &&
                <DataGrid
                  getRowHeight={() => 'auto'}
                  rows={productList}
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

export default Products;