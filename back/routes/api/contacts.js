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
	const response = await db.query(
		'SELECT * FROM products WHERE productid = $1',
		[productId],
	);
	const item = response.rows[0];
	res.status(200).send(item);
};

router.get('/', listAllProducts);
router.get('/:id', findProductById);
// const {
// 	getContactsController,
// 	getContactsByIdController,
// 	addContactsController,
// 	updateContactsController,
// 	updateContactStatusController,
// 	removeContactsController,
// } = require('../../controllers/contactsController');

// const {
// 	addPostValidation,
// 	patchPostValidation,
// 	schemaId,
// 	schemaUpdateContactStatus,
// } = require('../../middlewares/validationMiddleware');

// const { asyncWrapper } = require('../../helpers/apiHelpers');

// router.get('/', asyncWrapper(getContactsController));
// router.get('/:contactId', schemaId, asyncWrapper(getContactsByIdController));
// router.post('/', addPostValidation, asyncWrapper(addContactsController));
// router.patch(
// 	'/:contactId',
// 	schemaId,
// 	patchPostValidation,
// 	schemaUpdateContactStatus,
// 	asyncWrapper(updateContactsController),
// );
// router.patch(
// 	'/:contactId/favorite',
// 	schemaId,
// 	asyncWrapper(updateContactStatusController),
// );
// router.delete('/:contactId', schemaId, asyncWrapper(removeContactsController));

module.exports = router;
