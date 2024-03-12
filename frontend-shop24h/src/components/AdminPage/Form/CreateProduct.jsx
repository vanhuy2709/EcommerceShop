import {
  Box,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  useTheme
} from "@mui/material";
import { tokens } from "../../../theme";
import { Formik } from "formik";
import * as yup from 'yup';
import { useMediaQuery } from "@mui/material";
import Header from "../Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// React Quill
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

// Image File Import
import { InboxOutlined } from '@ant-design/icons';
import { Upload, Button, message } from "antd";
const { Dragger } = Upload;

// Action
import {
  getAllCategoryAction,
  createProductAction
} from '../../../store/actions/admin/apiRequest.action';

// Product Initial Values
const initialValuesProduct = {
  name: '',
  description: '',
  brand: '',
  buyPrice: '',
  promotionPrice: '',
  category: '',
  countInStock: '',
  // rating: '',
  // numReviews: '',
  isFeatured: false,
}

// Product Schema
const productSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  brand: yup.string().required("Brand is required"),
  buyPrice: yup.number().required("Buy Price is required"),
  promotionPrice: yup.number().required("Promotion Price is required"),
  category: yup.string().required("Category is required"),
  countInStock: yup.number().required("Count in Stock is required"),
  // rating: yup.number().required("Rating is required"),
  // numReviews: yup.number().required("Num Reviews is required"),
  isFeatured: yup.boolean().required("Featured is required"),
})

const CreateProduct = () => {

  // Set Dark Mode / Light Mode Feature
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Props for Dragger
  const [images, setImages] = useState([]);
  const props = {
    name: 'file',
    multiple: true,
    maxCount: 5,
    fileList: images,
    customRequest: ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    },
    beforeUpload: (file) => {
      const acceptedFormats = ['png', 'jpg', 'jpeg'];
      let isJpgOrPng = acceptedFormats.includes(file.name.split('.')[1]);
      let isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJpgOrPng) {
        message.error('You can only upload JPG / PNG / JPEG file!');
        return Upload.LIST_IGNORE;
      }
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
        return Upload.LIST_IGNORE;
      }

      return isJpgOrPng && isLt2M;
    },
    onChange: ({ fileList }) => {
      setImages(fileList);
    }
  };

  // Set state for React Quill
  const [richDescription, setRichDescription] = useState('');

  // Get Token & Load list Category
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { listCategory } = useSelector(reduxData => reduxData.categoryAdminReducer);
  const { pending, categoryList } = listCategory;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Submit Create Product
  const handleFormSubmit = (values, { resetForm }) => {
    let newImages = images.map(item => item.originFileObj)

    const product = {
      ...values,
      richDescription,
      images: newImages
    }

    dispatch(createProductAction(product, storageUser.token));
    // // Reset Formik
    resetForm();
    // // Reset Images
    setImages([]);
    // // Reset rich Description
    setRichDescription('');
  }

  // Get all Category
  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [])

  return (
    <Box m="20px">
      <Header title="CREATE PRODUCT" subtitle="Create a New Product" />

      {/* CREATE PRODUCT */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesProduct}
        validationSchema={productSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />

              <FormControl
                sx={{ gridColumn: "span 2" }}
              >
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  variant="filled"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category}
                  name="category"
                  error={!!touched.category && !!errors.category}
                  helpertext={touched.category && errors.category}
                  defaultValue=""
                  fullWidth
                >
                  {
                    categoryList && categoryList.map(item => (
                      <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.brand}
                name="brand"
                error={!!touched.brand && !!errors.brand}
                helperText={touched.brand && errors.brand}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />

              <div style={{ gridColumn: "span 4" }}>
                <ReactQuill
                  theme="snow"
                  placeholder="Write something about this product"
                  value={richDescription}
                  onChange={(value) => setRichDescription(value)}
                />
              </div>

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Buy Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.buyPrice}
                name="buyPrice"
                error={!!touched.buyPrice && !!errors.buyPrice}
                helperText={touched.buyPrice && errors.buyPrice}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Promotion Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.promotionPrice}
                name="promotionPrice"
                error={!!touched.promotionPrice && !!errors.promotionPrice}
                helperText={touched.promotionPrice && errors.promotionPrice}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Count in Stock"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.countInStock}
                name="countInStock"
                error={!!touched.countInStock && !!errors.countInStock}
                helperText={touched.countInStock && errors.countInStock}
                sx={{ gridColumn: "span 1" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Rating"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rating}
                name="rating"
                error={!!touched.rating && !!errors.rating}
                helperText={touched.rating && errors.rating}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Num Reviews"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.numReviews}
                name="numReviews"
                error={!!touched.numReviews && !!errors.numReviews}
                helperText={touched.numReviews && errors.numReviews}
                sx={{ gridColumn: "span 1" }}
              /> */}

              <FormControl
                sx={{ gridColumn: "span 1" }}
              >
                <InputLabel>Featured</InputLabel>
                <Select
                  label="Featured"
                  variant="filled"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.isFeatured}
                  name="isFeatured"
                  error={!!touched.isFeatured && !!errors.isFeatured}
                  helpertext={touched.isFeatured && errors.isFeatured}
                  defaultValue=""
                  fullWidth
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>

              {/* Dragger Image List */}
              <Dragger {...props} >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p
                  className="ant-upload-text"
                  style={{ color: colors.primary[100] }}
                >
                  Click or drag file to this area to upload images
                </p>
              </Dragger>
            </Box>



            <Box display="flex" justifyContent="end" mt="20px">
              <Button htmlType="submit" className="text-white">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateProduct;