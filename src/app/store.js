import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import caseReducer from './caseSlice';

export const store = configureStore({
	reducer: {
		popup: popupReducer,
		case: caseReducer,
	},
});