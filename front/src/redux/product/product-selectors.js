const getProducts = state => state.items;
const getChangeProductId = state => state.changeProduct.id;

const getShowModal = state => state.showModal;

// eslint-disable-next-line
export default {
	getProducts,
	getChangeProductId,
	getShowModal,
};
