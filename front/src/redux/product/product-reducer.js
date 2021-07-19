import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { productActions } from '.';

const items = createReducer([], {
	[productActions.fetchProductsSuccess]: (_, { payload }) => payload,
	[productActions.addProductSuccess]: (state, { payload }) => [
		...state,
		payload,
	],
	[productActions.removeProductSuccess]: (state, { _, payload }) =>
		state.filter(({ id }) => id !== payload),
});

const changeProduct = createReducer(
	{},
	{
		[productActions.changeProductSuccess]: (_, { payload }) => payload,
	},
);

const showModal = createReducer(false, {
	[productActions.showFormModal]: () => true,
	[productActions.closeFormModal]: () => false,
});

export default combineReducers({
	items,
	changeProduct,
	showModal,
});
