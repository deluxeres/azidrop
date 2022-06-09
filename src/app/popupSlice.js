import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        status: 'idle',
        visiblePopup: '',
        message: {
            title: '',
            text: '',
            img: ''
        },
    },
    reducers: {
        openCasePopup: function (state, action) {
            state.status = 'opened';
            state.visiblePopup = 'CasePopup';
            state.message.title = action.payload.title;
            state.message.text = action.payload.text;
            state.message.img = action.payload.img;
        },
        closePopup: function (state, action) {
            state.status = 'closed';
            state.visiblePopup = '';
        }
    }
});

export const selectVisible = (state) => state.popup.visiblePopup;
export const selectMessage = (state) => state.popup.message;

export const { openCasePopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;