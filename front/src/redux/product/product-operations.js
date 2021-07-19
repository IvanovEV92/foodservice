import axios from 'axios';
import actions from './product-action';

// axios.defaults.baseURL = 'https://iev-foodservice.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:3334/';
const fetchProducts = () => async dispatch => {
	dispatch(actions.fetchProductsRequest());
	try {
		const { data } = await axios.get('/api');
		dispatch(actions.fetchProductsSuccess(data));
	} catch (error) {
		dispatch(actions.fetchProductsError(error));
	}
};

const fetchProductsById = id => async dispatch => {
	dispatch(actions.changeProductRequest());
	try {
		const { data } = await axios.get(`/api/${id}`);
		dispatch(actions.changeProductSuccess(data));
	} catch (error) {
		dispatch(actions.changeProductError(error));
	}
};

const addProduct = newProduct => async dispatch => {
	dispatch(actions.addProductRequest());
	try {
		const { data } = await axios.post('/api/', { ...newProduct });
		console.log(data);
		dispatch(actions.addProductSuccess(data));
	} catch (error) {
		dispatch(actions.addProductError(error));
	}
};

const removeProduct = contactId => async dispatch => {
	dispatch(actions.removeProductRequest());
	try {
		axios.delete(`/api/${contactId}`);
		dispatch(actions.removeProductSuccess(contactId));
	} catch (error) {
		dispatch(actions.removeProductError(error));
	}
};

export default { fetchProducts, fetchProductsById, addProduct, removeProduct };
