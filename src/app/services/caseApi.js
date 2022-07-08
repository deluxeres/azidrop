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
	}),
});

export const { useGetCategoriesQuery, useGetLoyalityQuery, useGetPayWinnerQuery } = caseApi;