/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const {
	getProductsController,
	getProductsByIdController,
	addProductsController,
	updateProductsController,
	removeProductsController,
} = require('../../controllers/productController');

const { asyncWrapper } = require('../../helpers/asyncWrapper');

router.get('/', asyncWrapper(getProductsController));
router.get('/:id', asyncWrapper(getProductsByIdController));
router.post('/', asyncWrapper(addProductsController));
router.put('/:id', asyncWrapper(updateProductsController));
router.delete('/:id', asyncWrapper(removeProductsController));

module.exports = router;
