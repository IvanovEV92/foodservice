import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { productActions } from '.';

const items = createReducer([], {
	[productActions.fetchProductsSuccess]: (_, { payload }) => payload,

	[productActions.addProductSuccess]: (state, { payload }) => [
		...state,
		payload,
	],

	[productActions.updateProductSuccess]: (state, { payload }) =>
		state.map(item => (item.id === payload.id ? { ...payload } : item)),

	[productActions.removeProductSuccess]: (state, { _, payload }) =>
		state.filter(({ id }) => id !== payload),
});

const changeProduct = createReducer(
	{},
	{
		[productActions.changeProductSuccess]: (_, { payload }) => payload,
		[productActions.closeEditForm]: (_, { payload }) => (payload = {}),
	},
);

const showModal = createReducer(false, {
	[productActions.showFormModal]: () => true,
	[productActions.closeFormModal]: () => false,
});

const loading = createReducer(false, {
	[productActions.startLoading]: () => true,
	[productActions.endLoading]: () => false,
});

export default combineReducers({
	items,
	changeProduct,
	showModal,
	loading,
});
