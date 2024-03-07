const mongoose = require('mongoose');
const multer = require('multer');
const productModel = require('../models/product.model');
const categoryModel = require('../models/category.model');

// Get all Product (Filter, Pagination, Search)
const getAllProduct = async (req, res) => {

  let filter = {};

  // Filter (Categories)
  if (req.query.categories) {
    filter = {
      ...filter,
      category: req.query.categories.split(',')
    };
  }

  // Filter (Price)
  if (req.query.minPrice && req.query.maxPrice) {
    filter = {
      ...filter,
      promotionPrice: { $gte: req.query.minPrice, $lte: req.query.maxPrice }
    };
  }

  // Filter Rating
  if (req.query.rating) {
    filter = {
      ...filter,
      rating: { $gte: req.query.rating }
    }
  }

  // Search
  if (req.query.search) {
    filter = {
      ...filter,
      // name: { $regex: req.query.search }
      name: new RegExp(req.query.search, "i")
    }
  };

  // Pagination
  let page = parseInt(req.query.page);
  let limit = parseInt(req.query.limit);
  let skip = (page - 1) * limit;

  const productList = await productModel
    .find(filter)
    .sort(
      req.query.sortPrice ? { promotionPrice: req.query.sortPrice } : null
    )
    .skip(skip)
    .limit(limit)
    // .select('name image buyPrice promotionPrice rating isFeatured')
    .populate('category')

  const count = await productModel
    .find(filter)
    .select('name image buyPrice promotionPrice rating isFeatured')
    .populate('category')

  const totalProduct = await productModel.countDocuments();

  try {
    return res.status(200).json({
      total: totalProduct,
      count: count.length,
      limit: limit,
      data: productList
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    })
  }
}

// Get Product by ID
const getProductById = async (req, res) => {
  const productId = req.params.productId;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json('Product ID is not valid')
  }

  try {
    const product = await productModel.findById(productId).populate('category');

    if (!product) {
      return res.status(404).json('Product ID is not found')
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    })
  }
}

// Get Product is Featured
const getProductIsFeatured = async (req, res) => {
  const productList = await productModel
    .find({ isFeatured: true })
    .limit(4)
    .select('name image buyPrice promotionPrice countInStock rating isFeatured')
    .populate('category');

  try {
    return res.status(200).json(productList);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    })
  }
}

// Get Product is Max Price
const getProductIsMaxPrice = async (req, res) => {

  try {
    const productList = await productModel.find().select("promotionPrice");

    const listPriceofProduct = productList.map(item => item.promotionPrice);
    const maxPrice = Math.max(...listPriceofProduct);

    const product = await productModel.findOne({ promotionPrice: maxPrice })

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }
}

// Get Product is Min Price
const getProductIsMinPrice = async (req, res) => {

  try {
    const productList = await productModel.find().select("promotionPrice");

    const listPriceofProduct = productList.map(item => item.promotionPrice);
    const minPrice = Math.min(...listPriceofProduct);

    const product = await productModel.findOne({ promotionPrice: minPrice })

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }
}

// Create Product
const createProduct = async (req, res) => {
  const {
    name,
    description,
    richDescription,
    image,
    brand,
    buyPrice,
    promotionPrice,
    category,
    countInStock,
    rating,
    numReviews,
    isFeatured } = req.body;

  // Validate Upload File
  const file = req.file;
  if (!file) {
    return res.status(400).json('No Image in the request');
  }

  const fileName = req.file.filename;
  const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

  if (!name) {
    return res.status(400).json('Name is required');
  }
  if (!description) {
    return res.status(400).json('Description is required');
  }
  if (!category) {
    return res.status(400).json('Category is required');
  }
  if (!mongoose.Types.ObjectId.isValid(category)) {
    return res.status(400).json('Category ID is not valid');
  }
  if (!countInStock) {
    return res.status(400).json('Count in stock is required');
  }

  // Check Category in Product
  const checkCategory = await categoryModel.findById(category);
  if (!checkCategory) {
    return res.status(404).json('Category is not found');
  }

  const newProduct = {
    name,
    description,
    richDescription,
    image: `${basePath}${fileName}`,
    brand,
    buyPrice,
    promotionPrice,
    category,
    countInStock,
    rating,
    numReviews,
    isFeatured
  }

  try {
    const product = await productModel.create(newProduct);

    return res.status(201).json(product);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    })
  }
}

// Update Product by ID
const updateProductById = async (req, res) => {
  const productId = req.params.productId;
  const {
    name,
    description,
    richDescription,
    image,
    brand,
    buyPrice,
    promotionPrice,
    category,
    countInStock,
    rating,
    numReviews,
    isFeatured } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json('Product ID is not valid')
  }

  if (!name) {
    return res.status(400).json('Name is required');
  }
  if (!description) {
    return res.status(400).json('Description is required');
  }
  if (!category) {
    return res.status(400).json('Category is required');
  }
  if (!mongoose.Types.ObjectId.isValid(category)) {
    return res.status(400).json('Category ID is not valid');
  }
  if (!countInStock) {
    return res.status(400).json('Count in stock is required');
  }

  // Check Category in Product
  const checkCategory = await categoryModel.findById(category);
  if (!checkCategory) {
    return res.status(404).json('Category is not found');
  }

  const newProduct = {
    name,
    description,
    richDescription,
    image,
    brand,
    buyPrice,
    promotionPrice,
    category,
    countInStock,
    rating,
    numReviews,
    isFeatured
  }

  try {
    const product = await productModel.findByIdAndUpdate(
      productId,
      newProduct,
      { new: true }
    )

    if (!product) {
      return res.status(404).json('Product ID is not found');
    }

    return res.status(200).json(product);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    })
  }
}

// Update Product with Gallery Images
const updateProductGalleryImagesById = async (req, res) => {
  const productId = req.params.productId;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json('Product ID is not valid')
  }

  try {
    let imagesPaths = [];
    const files = req.files;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

    if (files) {
      files.map(file => {
        imagesPaths.push(`${basePath}${file.filename}`);
      })
    }

    const updateProduct = {
      images: imagesPaths
    }

    const product = await productModel.findByIdAndUpdate(
      productId,
      updateProduct,
      { new: true }
    )

    if (!product) {
      return res.status(404).json('Product ID is not found');
    }

    return res.status(200).json(product);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    })
  }
}

// Delete Product by ID
const deleteProductById = async (req, res) => {
  const productId = req.params.productId;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json('Product ID is not valid')
  }

  try {
    const product = await productModel.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json('Product ID is not found')
    }

    return res.status(200).json({
      success: true,
      message: 'Delete Successfully'
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    })
  }
}

module.exports = {
  getAllProduct,
  getProductById,
  getProductIsFeatured,
  getProductIsMaxPrice,
  getProductIsMinPrice,
  createProduct,
  updateProductById,
  updateProductGalleryImagesById,
  deleteProductById
}