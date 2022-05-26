import { createSlice } from '@reduxjs/toolkit'

const casesSlice = createSlice({
  name: 'cases',
  initialState: {
    currentCase: null
  },
  reducers: {
    setCurrentCase: (state, action) => {
      state.currentCase = action.payload
    },
  }
});

export const { setCurrentCase } = casesSlice.actions;
export default casesSlice.reducer;
