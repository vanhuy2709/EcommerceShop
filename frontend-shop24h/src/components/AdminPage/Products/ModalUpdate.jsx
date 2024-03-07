import { Modal, Input, Image, Select, Button, notification, message } from "antd";
import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import 'react-quill/dist/quill.snow.css';
import '../../../styles/editor.css';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from "antd";
const { Dragger } = Upload;

// Action
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseModalUpdateProductAction,
  handleChangeBrandProductAction,
  handleChangeBuyPriceProductAction,
  handleChangeCategoryProductAction,
  handleChangeCountInStockProductAction,
  handleChangeDescProductAction,
  handleChangeFeaturedProductAction,
  handleChangeImageProductAction,
  handleChangeNameProductAction,
  handleChangePromotionPriceProductAction,
  handleChangeRatingProductAction,
  handleChangeReviewsProductAction,
  handleChangeRichDescProductAction,
} from '../../../store/actions/admin/modal.action';
import { updateProductByIdAction } from '../../../store/actions/admin/apiRequest.action';

const ModalUpdate = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));

  const dispatch = useDispatch();
  const [categories, setCategories] = useState(null);
  const { updateModal } = useSelector(reduxData => reduxData.modalAdminReducer);
  const {
    open,
    id,
    name,
    description,
    richDescription,
    image,
    images,
    brand,
    buyPrice,
    promotionPrice,
    category,
    countInStock,
    rating,
    numReviews,
    isFeatured } = updateModal;

  useEffect(() => {
    fetch('http://localhost:8080/api/categories/')
      .then(response => response.json())
      .then(result => setCategories(result))
      .catch(err => console.error(err))
  }, [])

  // Handle Change info Product
  const handleChangeProductName = (e) => {
    dispatch(handleChangeNameProductAction(e.target.value))
  }
  const handleChangeProductDesc = (e) => {
    dispatch(handleChangeDescProductAction(e.target.value))

  }
  const handleChangeProductRichDesc = (value) => {
    dispatch(handleChangeRichDescProductAction(value))

  }
  const handleChangeProductBrand = (e) => {
    dispatch(handleChangeBrandProductAction(e.target.value))

  }
  const handleChangeProductBuyPrice = (e) => {
    dispatch(handleChangeBuyPriceProductAction(e.target.value))

  }
  const handleChangeProductPromotionPrice = (e) => {
    dispatch(handleChangePromotionPriceProductAction(e.target.value))

  }
  const handleChangeProductCategory = (value) => {
    dispatch(handleChangeCategoryProductAction(value))

  }
  const handleChangeProductRating = (e) => {
    dispatch(handleChangeRatingProductAction(e.target.value))

  }
  const handleChangeProductReviews = (e) => {
    dispatch(handleChangeReviewsProductAction(e.target.value))

  }
  const handleChangeProductCountInStock = (e) => {
    dispatch(handleChangeCountInStockProductAction(e.target.value))

  }
  const handleChangeProductFeatured = (value) => {
    dispatch(handleChangeFeaturedProductAction(value))

  }
  const handleChangeProductImage = (e) => {
    dispatch(handleChangeImageProductAction(e.target.value))
  }

  const [newImagesList, setNewImagesList] = useState([]);
  const props = {
    name: 'file',
    multiple: true,
    maxCount: 5,
    fileList: newImagesList,
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
      setNewImagesList(fileList);
    },
  };

  // Handle Update Product by ID
  const handleUpdateProduct = () => {
    let newImages = newImagesList.map(item => item.originFileObj)

    const newInfoProduct = {
      name: name.trim(),
      description: description.trim(),
      richDescription: richDescription.trim(),
      images: newImages,
      brand: brand.trim(),
      buyPrice,
      promotionPrice,
      category: category.trim(),
      countInStock,
      rating,
      numReviews,
      isFeatured
    }

    dispatch(updateProductByIdAction(id, newInfoProduct, storageUser.token));
    // Reset Images
    setNewImagesList([]);
  }

  return (
    <Modal
      title="Product Detail"
      centered
      open={open}
      footer={false}
      onCancel={() => dispatch(handleCloseModalUpdateProductAction())}
      width={1000}
    >

      {/* ID & Name */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>ID: </label>
          <Input placeholder="ID" value={id} disabled />
        </div>

        <div className="flex items-center gap-4">
          <label>Name: </label>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => handleChangeProductName(e)}
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex items-center gap-4 mb-4">
        <label>Description</label>
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => handleChangeProductDesc(e)}
        />
      </div>

      {/* Rich Description */}
      <div className="mb-4">
        <ReactQuill
          theme="snow"
          placeholder="Rich Description"
          value={richDescription}
          onChange={(value) => handleChangeProductRichDesc(value)}
        />
      </div>

      {/* Brand */}
      <div className="flex items-center mb-4 gap-4">
        <label>Brand: </label>
        <Input
          placeholder="Brand"
          value={brand}
          onChange={(e) => handleChangeProductBrand(e)}
        />
      </div>

      {/* Buy Price & Promotion Price */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>Buy Price: </label>
          <Input
            type="number"
            placeholder="Buy Price"
            className="w-60"
            value={buyPrice}
            onChange={(e) => handleChangeProductBuyPrice(e)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label>Promotion Price: </label>
          <Input
            type="number"
            placeholder="Promotion Price"
            className="w-60"
            value={promotionPrice}
            onChange={(e) => handleChangeProductPromotionPrice(e)}
          />
        </div>
      </div>

      {/* Select Category */}
      <div className="flex items-center gap-4 mb-4">
        <label>Category: </label>
        <Select
          className="w-full"
          value={category}
          onChange={(value) => handleChangeProductCategory(value)}
          options={categories && categories.map(category => {
            return {
              value: category._id,
              label: category.name
            }
          })}
        />
      </div>

      {/* Rating & Num Review */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>Rating: </label>
          <Input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => handleChangeProductRating(e)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label>Reviews: </label>
          <Input
            type="number"
            placeholder="Num Reviews"
            value={numReviews}
            onChange={(e) => handleChangeProductReviews(e)}
          />
        </div>
      </div>

      {/* Count in Stock, isFeatured */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>Count in Stock: </label>
          <Input
            type="number"
            placeholder="Count in Stock"
            value={countInStock}
            onChange={(e) => handleChangeProductCountInStock(e)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label>Featured: </label>
          <Select
            className="w-full"
            value={isFeatured}
            onChange={(value) => handleChangeProductFeatured(value)}
            options={[
              {
                value: true,
                label: 'True',
              },
              {
                value: false,
                label: 'False',
              },
            ]}
          />
        </div>
      </div>

      {/* Image SLide */}
      <div className="flex items-center justify-center">
        {
          images && images.map(image => (
            <Image
              key={image}
              width={100}
              height={100}
              src={image}
              style={{ objectFit: 'cover' }}
            />
          ))
        }
      </div>

      {/* Update Image */}
      <div className="m-10">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p
            className="ant-upload-text"
          >
            Click or drag file to this area to update images
          </p>
        </Dragger>
      </div>

      {/* Action */}
      <div className="flex gap-4 justify-end">
        <Button onClick={() => handleUpdateProduct()}>Update</Button>
        <Button
          type="primary"
          danger
          onClick={() => dispatch(handleCloseModalUpdateProductAction())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalUpdate;