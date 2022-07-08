import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import caseReducer from './caseSlice';
import userReducer from './userSlice';
import { usersApi } from './services/userApi';
import { caseApi } from './services/caseApi';

export const store = configureStore({
	reducer: {
		popup: popupReducer,
		case: caseReducer,
		user: userReducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[caseApi.reducerPath]: caseApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
		usersApi.middleware,
		caseApi.middleware,
	),
});