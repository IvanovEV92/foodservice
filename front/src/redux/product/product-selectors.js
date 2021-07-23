const getProducts = state => state.items;
const getChangeProductId = state => state.changeProduct.id;

const getShowModal = state => state.showModal;

const getLoading = state => state.loading;

// eslint-disable-next-line
export default {
	getProducts,
	getChangeProductId,
	getShowModal,
	getLoading,
};
