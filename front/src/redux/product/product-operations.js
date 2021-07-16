import axios from 'axios';
import actions from './product-action';

axios.defaults.baseURL = 'https://iev-foodservice.herokuapp.com/';

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

export default { fetchProducts, fetchProductsById };
