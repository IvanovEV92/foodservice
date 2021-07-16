const getProducts = state => state.items;
const getChangeProductId = state => state.changeProduct.id;
const getChangeProductName = state => state.changeProduct.product_name;

// eslint-disable-next-line
export default { getProducts, getChangeProductId, getChangeProductName };
