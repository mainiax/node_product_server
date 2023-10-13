const express = require('express');
const router = express.Router();
const productController = require('./../controller/productController');

router
	.route('/')
	.get(productController.GetAllProducts)
	.post(productController.CreateProduct)
	.delete(productController.DeleteAllProducts);

router
	.route('/:id')
	.get(productController.GetProductsById)
	.post(productController.UpdateProductsById)
	.delete(productController.RemoveProductsById);

module.exports = router;
