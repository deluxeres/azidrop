import { createApi } from '@reduxjs/toolkit/query/react';
import { authBaseQuery } from './baseQueries';

export const usersApi = createApi({
	baseQuery: authBaseQuery,
	reducerPath: 'usersApi',
	tagTypes: ['User'],
	endpoints: (build) => ({
		getUserData: build.query({
			query: () => ({
				url: 'api/me',
			}),
			providesTags: ['User'],
		}),
		sellSkin: build.mutation({
			query: (body) => ({
				url: 'api/user/skin/sell',
				method: 'POST',
				body
			}),
			invalidatesTags: ['User'],
		}),
		withdrawSkin: build.mutation({
			query: (body) => ({
				url: 'api/user/skin/out',
				method: 'POST',
				body
			}),
			invalidatesTags: ['User'],
		}),
		addTradelink: build.mutation({
			query: (body) => ({
				url: 'api/user/tradelink',
				method: 'POST',
				body
			}),
			invalidatesTags: ['User'],
		}),
		logout: build.query({
			query: () => ({
				url: 'logout'
			}),
			invalidatesTags: ['User'],
		}),
	}),
});

export const {
	useGetUserDataQuery,
	useSellSkinMutation,
	useWithdrawSkinMutation,
	useLogoutQuery,
	useAddTradelinkMutation
} = usersApi;