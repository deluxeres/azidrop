import { createApi } from '@reduxjs/toolkit/query/react';
import { authBaseQuery } from './baseQueries';

export const usersApi = createApi({
	baseQuery: authBaseQuery,
	reducerPath: 'usersApi',
	endpoints: (build) => ({
		getUserData: build.query({
			query: () => ({
				url: 'api/categories',
			}),
		}),
	}),
});

export const { useGetUserDataQuery } = usersApi;