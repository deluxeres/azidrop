import { createSlice } from '@reduxjs/toolkit';

export const caseSlice = createSlice({
    name: 'case',
    initialState: {
        isCaseSpin: false,
    },
    reducers: {
        setCaseSpin: function (state, action) {
            state.isCaseSpin = action.payload;
        }
    }
});

export const isCaseSpin = (state) => state.case.isCaseSpin;
export const { setCaseSpin } = caseSlice.actions;
export default caseSlice.reducer;