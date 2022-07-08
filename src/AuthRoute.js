import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isUserLogin } from './app/userSlice';

export const AuthRoute = () => {
    const isLogin = useSelector(isUserLogin);

	if (isLogin) {
		return <Outlet />;
	} else {
		return <Navigate to="/" />;
	}
};