import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { productReducer } from './product';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	logger,
];

const store = configureStore({
	reducer: productReducer,
	middleware,
	devTools: process.env.NODE_ENV === 'development',
});

export default store;
