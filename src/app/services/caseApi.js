import { createApi } from '@reduxjs/toolkit/query/react';
import { defaultBaseQuery } from './baseQueries';

export const caseApi = createApi({
	baseQuery: defaultBaseQuery,
	reducerPath: 'caseApi',
	endpoints: (build) => ({
		getCategories: build.query({
			query: () => ({
				url: 'api/categories',
			}),
		}),
		getLoyality: build.query({
			query: () => ({
				url: 'api/loyalty',
			}),
		}),
		getPayWinner: build.query({
			query: () => ({
				url: 'api/paymentgift/winner',
			}),
		}),
		getWinSkins: build.query({
			query: () => ({
				url: 'api/skin/winner',
				// params: {limit: 25}
			}),
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetLoyalityQuery,
	useGetPayWinnerQuery,
	useGetWinSkinsQuery
} = caseApi;