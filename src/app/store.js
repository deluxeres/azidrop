import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';

export const store = configureStore({
	reducer: {
		popup: popupReducer,
	},
});