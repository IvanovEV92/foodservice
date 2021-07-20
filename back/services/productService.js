/* eslint-disable no-undef */
const db = require('../config/database');

const getProducts = async () => {
	const response = await db.query('SELECT * FROM products');
	return response.rows;
};

const getProductById = async productId => {
	const response = await db.query('SELECT * FROM products WHERE id = $1', [
		productId,
	]);
	return response.rows[0];
};

const addProduct = async body => {
	const { name, image, description, price } = body;
	const response = await db.query(
		'INSERT INTO products (product_name, product_image, product_description, price) VALUES ($1, $2, $3, $4) RETURNING *',
		[name, image, description, parseInt(price)],
	);
	return response.rows[0];
};

const updateProduct = async (productId, body) => {
	const { productImage, productName, productDescription, productPrice } = body;
	const response = await db.query(
		'UPDATE products SET product_name = $1, product_image = $2, product_description = $3, price = $4 WHERE id = $5 RETURNING *',
		[
			productName,
			productImage,
			productDescription,
			parseInt(productPrice),
			productId,
		],
	);
	return response.rows[0];
};

const removeProduct = async productId => {
	await db.query('DELETE FROM products WHERE id = $1 RETURNING id', [
		productId,
	]);
};

module.exports = {
	getProducts,
	getProductById,
	addProduct,
	updateProduct,
	removeProduct,
};
