import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from '../../../components/AdminPage/Header';
import {
  PersonAdd,
  MonetizationOnOutlined,
  Inventory2Outlined,
  CategoryOutlined
} from "@mui/icons-material";
import StatBox from "../../../components/AdminPage/StatBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import image from '../../../assets/images/product/apple.jfif';
import { Table } from 'antd'

// Action
import {
  getTotalSalesOrder,
  getAllUserAction,
  getAllProductAction,
  getAllCategoryAction,
  getAllProductFeaturedAction
} from '../../../store/actions/admin/apiRequest.action';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();

  // Get Total Sales Order
  const { totalSalesOrder } = useSelector(reduxData => reduxData.orderAdminReducer);
  const { totalSales } = totalSalesOrder;
  useEffect(() => {
    dispatch(getTotalSalesOrder(storageUser.token))
  }, [])

  // Get all User
  const { listUser } = useSelector(reduxData => reduxData.userAdminReducer)
  const { userList } = listUser;
  useEffect(() => {
    dispatch(getAllUserAction());
  }, [])

  // Get all Product
  const { listProduct } = useSelector(reduxData => reduxData.productAdminReducer);
  const { productList } = listProduct;
  useEffect(() => {
    dispatch(getAllProductAction());
  }, [])

  // Get all Category
  const { listCategory } = useSelector(reduxData => reduxData.categoryAdminReducer);
  const { categoryList } = listCategory;
  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [])

  // Get all Product Featured
  const { listFeaturedProduct } = useSelector(reduxData => reduxData.productAdminReducer);
  const { productFeaturedList } = listFeaturedProduct;
  useEffect(() => {
    dispatch(getAllProductFeaturedAction());
  }, [])

  return (
    <Box m='20px'>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      {/* GRID */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        {/* Row 1 */}
        {/* Total Sales */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title={totalSales && `$ ${totalSales.totalsales}`}
            subtitle="Total Sales"
            navigateToPage='orders'
            icon={<MonetizationOnOutlined sx={{ color: colors.blueAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* Total User */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title={userList && userList.length}
            subtitle="Total User"
            navigateToPage='users'
            icon={<PersonAdd sx={{ color: colors.blueAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* Total Product */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title={productList && productList.length}
            subtitle="Total Products"
            navigateToPage='products'
            icon={<Inventory2Outlined sx={{ color: colors.blueAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* Total Categories */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title={categoryList && categoryList.length}
            subtitle="Total Categories"
            navigateToPage='categories'
            icon={<CategoryOutlined sx={{ color: colors.blueAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* Top Product Featured */}
        <Box
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          p="30px"
          borderRadius="5px"
        >
          <h1 className="font-[Poppins] font-bold text-2xl text-center mb-4">Featured Products</h1>

          <div className="grid grid-cols-5 items-center py-4 font-semibold">
            <p className="col-span-2">Product</p>
            <p>Category</p>
            <p>Buy Price</p>
            <p>Promotion Price</p>
          </div>
          {
            productFeaturedList && productFeaturedList.length > 0 &&
            productFeaturedList.map((item, index) => (
              <div key={item._id} className="grid grid-cols-5 items-center border-t py-4">
                {/* Image & Name */}
                <div className="flex gap-4 items-center col-span-2">
                  <img
                    src={item.image}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <p>{item.name}</p>
                </div>
                {/* Category */}
                <p>{item.category.name}</p>
                {/* Buy Price */}
                <p>$ {item.buyPrice}</p>
                {/* Promotion Price */}
                <p>$ {item.promotionPrice}</p>
              </div>
            ))
          }

        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;