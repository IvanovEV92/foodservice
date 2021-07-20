/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const {
	getProducts,
	getProductById,
	addProduct,
	updateProduct,
	removeProduct,
} = require('../services/productService');

const getProductsController = async (req, res, next) => {
	const products = await getProducts();
	if (!products) {
		return res.status(404).json({ message: 'Not found' });
	}
	res.status(200).send(products);
};

const getProductsByIdController = async (req, res, next) => {
	const productId = parseInt(req.params.id);
	const product = await getProductById(productId);
	if (!product) {
		return res.status(404).json({ message: 'Not found' });
	}
	res.status(200).send(product);
};

const addProductsController = async (req, res, next) => {
	const newProduct = await addProduct(req.body);
	res.status(201).send(newProduct);
};

const updateProductsController = async (req, res, next) => {
	const productId = parseInt(req.params.id);
	const updateProducts = await updateProduct(productId, req.body);
	if (!updateProducts) {
		return res.status(404).json({ message: 'Not found' });
	}
	res.status(200).send(updateProducts);
};

const removeProductsController = async (req, res, next) => {
	const productId = parseInt(req.params.id);
	const result = await removeProduct(productId);
	console.log(result);
	res
		.status(200)
		.send({ message: `Product ${productId} deleted successfully!` });
};

module.exports = {
	getProductsController,
	getProductsByIdController,
	addProductsController,
	updateProductsController,
	removeProductsController,
};
