const express = require('express');
const router = express.Router();
const db = require('../../config/database');

const listAllProducts = async (req, res) => {
	const response = await db.query('SELECT * FROM products');
	res.status(200).send(response.rows);
};

const findProductById = async (req, res) => {
	const productId = parseInt(req.params.id);
	console.log(req.params.id);
	const response = await db.query('SELECT * FROM products WHERE id = $1', [
		productId,
	]);
	const item = response.rows[0];
	res.status(200).send(item);
};

const addProduct = async (req, res) => {
	const { name, image, description, price } = req.body;
	const response = await db.query(
		'INSERT INTO products (product_name, product_image, product_description, price) VALUES ($1, $2, $3, $4) RETURNING *',
		[name, image, description, price],
	);
	const item = response.rows[0];
	res.status(201).send(item);
};

const removeProduct = async (req, res) => {
	const productId = parseInt(req.params.id);
	await db.query('DELETE FROM products WHERE id = $1', [productId]);

	res.status(200).send({ message: 'Product deleted successfully!', productId });
};

router.get('/', listAllProducts);
router.get('/:id', findProductById);
router.post('/', addProduct);
router.delete('/:id', removeProduct);

module.exports = router;
