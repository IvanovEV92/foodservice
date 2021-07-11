import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactActions } from './';

const items = createReducer([], {
	[contactActions.fetchContactsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
	[contactActions.fetchContactsRequest]: () => true,
	[contactActions.fetchContactsSuccess]: () => false,
	[contactActions.fetchContactsError]: () => false,
});
export default combineReducers({
	items,
	loading,
});
