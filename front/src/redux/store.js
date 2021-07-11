import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducer } from './contact';
import {
	persistStore,
	persistReducer,
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
	reducer: contactReducer,
	middleware,
	devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
