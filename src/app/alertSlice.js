import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        status: 'idle',
        isOpen: false,
        type: 'success',
        message: '',
    },
    reducers: {
        openErrorAlert: (state, action) => {
            state.isOpen = true;
            state.type = 'error';
            state.message = action.payload;
        },
        openSuccessAlert: (state, action) => {
            state.isOpen = true;
            state.type = 'success';
            state.message = action.payload;
        },
        closeAlert: function (state, action) {
            state.isOpen = false;
            state.message = '';
        }
    }
});

export const selectAlert = (state) => state.alert;

export const { openErrorAlert, openSuccessAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;