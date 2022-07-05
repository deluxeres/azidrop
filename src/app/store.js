import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import caseReducer from './caseSlice';
import { usersApi } from './services/userApi';

export const store = configureStore({
	reducer: {
		popup: popupReducer,
		case: caseReducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
		usersApi.middleware,
	),
});