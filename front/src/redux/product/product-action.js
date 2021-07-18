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

export default {
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
};
