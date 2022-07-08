import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isUserLogin, setLogin, setLogout } from './app/userSlice';

export const AuthRoute = () => {
    const isLogin = useSelector(isUserLogin);

	if (isLogin) {
		return <Outlet />;
	} else {
		return <Navigate to="/" />;
	}
}

export const LogoutRoute = () => {
	const dispatch = useDispatch();

    dispatch(setLogout());

	return <Navigate to="/" />;
}