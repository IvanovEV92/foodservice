import { createAction } from '@reduxjs/toolkit';

const fetchProductsRequest = createAction('products/fetchProductsRequest');
const fetchProductsSuccess = createAction('products/fetchProductsSuccess');
const fetchProductsError = createAction('products/fetchProductsError');
const changeProductRequest = createAction('products/changeProductRequest');
const changeProductSuccess = createAction('products/changeProductSuccess');
const changeProductError = createAction('products/changeProductError');

const showFormModal = createAction('products/showFormModal');
const closeFormModal = createAction('products/closeFormModal');

const addProductRequest = createAction('products/addProductRequest');
const addProductSuccess = createAction('products/addProductSuccess');
const addProductError = createAction('products/addProductError');

const updateProductRequest = createAction('products/updateProductRequest');
const updateProductSuccess = createAction('products/updateProductSuccess');
const updateProductError = createAction('products/updateProductError');

const removeProductRequest = createAction('products/removeProductRequest');
const removeProductSuccess = createAction('products/removeProductSuccess');
const removeProductError = createAction('products/removeProductError');

const closeEditForm = createAction('products/closeEditForm');

const startLoading = createAction('products/startLoading');
const endLoading = createAction('products/endLoading');

const productActions = {
	fetchProductsRequest,
	fetchProductsSuccess,
	fetchProductsError,
	changeProductRequest,
	changeProductSuccess,
	changeProductError,
	showFormModal,
	closeFormModal,
	addProductRequest,
	addProductSuccess,
	addProductError,
	updateProductRequest,
	updateProductSuccess,
	updateProductError,
	removeProductRequest,
	removeProductSuccess,
	removeProductError,
	closeEditForm,
	startLoading,
	endLoading,
};
export default productActions;
