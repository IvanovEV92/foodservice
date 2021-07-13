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

router.get('/', listAllProducts);
router.get('/:id', findProductById);

module.exports = router;
