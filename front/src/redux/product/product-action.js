import { createAction } from '@reduxjs/toolkit';

const fetchProductsRequest = createAction('contacts/fetchProductsRequest');
const fetchProductsSuccess = createAction('contacts/fetchProductsSuccess');
const fetchProductsError = createAction('contacts/fetchProductsError');
const changeProductRequest = createAction('contacts/changeProductRequest');
const changeProductSuccess = createAction('contacts/changeProductSuccess');
const changeProductError = createAction('contacts/changeProductError');

export default {
	fetchProductsRequest,
	fetchProductsSuccess,
	fetchProductsError,
	changeProductRequest,
	changeProductSuccess,
	changeProductError,
};
