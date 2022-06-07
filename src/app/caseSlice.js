import { createSlice } from '@reduxjs/toolkit';

export const caseSlice = createSlice({
    name: 'case',
    initialState: {
        isSpin: false,
    },
    reducers: {
        setSpin: function (state, action) {
            state.isSpin = true;
        }
    }
});

export const selectVisible = (state) => state.popup.visiblePopup;
export const selectMessage = (state) => state.popup.message;

export const { setSpin } = caseSlice.actions;
export default caseSlice.reducer;