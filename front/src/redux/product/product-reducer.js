import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { productActions } from '.';

const items = createReducer([], {
	[productActions.fetchProductsSuccess]: (_, { payload }) => payload,
});

const changeProduct = createReducer(
	{},
	{
		[productActions.changeProductSuccess]: (_, { payload }) => payload,
	},
);
export default combineReducers({
	items,
	changeProduct,
});
