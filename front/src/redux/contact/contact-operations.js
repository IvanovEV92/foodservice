import axios from 'axios';
import actions from './contact-action';

axios.defaults.baseURL = 'http://localhost:3334';

const fetchContact = () => async dispatch => {
	dispatch(actions.fetchContactsRequest());
	try {
		const { data } = await axios.get('/api');
		dispatch(actions.fetchContactsSuccess(data));
	} catch (error) {
		dispatch(actions.fetchContactsError(error));
	}
};

export default { fetchContact };
