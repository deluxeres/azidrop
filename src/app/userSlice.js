import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
    },
    reducers: {
        setLogin: function (state, action) {
            state.isLogin = true;
        },
        setLogout: function (state, action) {
            state.isLogin = false;
        }
    }
});

export const isUserLogin = (state) => state.user.isLogin;
export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;