const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { uploadOptions } = require('../middlewares/uploadOptions.middleware');

router.get('/', productController.getAllProduct)
router.get('/featured', productController.getProductIsFeatured)
router.get('/get/maxPrice', productController.getProductIsMaxPrice)
router.get('/get/minPrice', productController.getProductIsMinPrice)
router.get('/:productId', productController.getProductById)

router.post('/', uploadOptions.single('image'), productController.createProduct)

router.put('/gallery-images/:productId',
  uploadOptions.array('images', 10),
  productController.updateProductGalleryImagesById
)
router.put('/:productId', productController.updateProductById)

router.delete('/:productId', productController.deleteProductById)

module.exports = router;