import axios from 'axios';
import actions from './product-action';

// axios.defaults.baseURL = 'https://iev-foodservice.herokuapp.com/products';
axios.defaults.baseURL = 'http://localhost:3333/products';
const fetchProducts = () => async dispatch => {
	dispatch(actions.fetchProductsRequest());
	try {
		const { data } = await axios.get('/');
		dispatch(actions.fetchProductsSuccess(data));
	} catch (error) {
		dispatch(actions.fetchProductsError(error));
	}
};

const fetchProductsById = id => async dispatch => {
	dispatch(actions.changeProductRequest());
	try {
		const { data } = await axios.get(`/${id}`);
		dispatch(actions.changeProductSuccess(data));
	} catch (error) {
		dispatch(actions.changeProductError(error));
	}
};

const addProduct = newProduct => async dispatch => {
	dispatch(actions.addProductRequest());
	try {
		const { data } = await axios.post('/', { ...newProduct });
		dispatch(actions.addProductSuccess(data));
	} catch (error) {
		dispatch(actions.addProductError(error));
	}
};

const updateProduct = (id, newProduct) => async dispatch => {
	dispatch(actions.updateProductRequest());
	try {
		const { data } = await axios.put(`/${id}`, { ...newProduct });

		dispatch(actions.updateProductSuccess(data));
	} catch (error) {
		dispatch(actions.updateProductError(error));
	}
};

const removeProduct = contactId => async dispatch => {
	dispatch(actions.removeProductRequest());
	try {
		axios.delete(`/${contactId}`);
		dispatch(actions.removeProductSuccess(contactId));
	} catch (error) {
		dispatch(actions.removeProductError(error));
	}
};

const productOperations = {
	fetchProducts,
	fetchProductsById,
	addProduct,
	updateProduct,
	removeProduct,
};

export default productOperations;
