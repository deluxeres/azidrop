import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosQuery, defaultBaseQuery } from './baseQueries';

export const caseApi = createApi({
	baseQuery: defaultBaseQuery,
	reducerPath: 'caseApi',
	endpoints: (build) => ({
		getCategories: build.query({
			query: () => ({
				url: 'api/categories',
			}),
		}),
		getCase: build.query({
			query: ({ id }) => ({
				url: 'api/cases/' + id,
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
			}),
			async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
				let sto, pooling;

				try {
					const resCd = await cacheDataLoaded;

					sto = null;
					pooling = true;

					const listener = (res) => {
						updateCachedData((draft) => {
							if (res.data.items.length) {
								draft.items.unshift(...res.data.items);
							}
						});
					}

					function loop(id) {
						axiosQuery.get('api/skin/winner', { params: { from: id } })
							.then(res => {
								listener(res);

								sto = setTimeout(() => {
									if (pooling) {
										loop(res.data.lastId);
									}
								}, 2000);
							});
					}

					setTimeout(() => {
						if (pooling) {
							loop(resCd.data.lastId);
						}
					}, 2000);
				} catch {

				}

				await cacheEntryRemoved;

				clearTimeout(sto);
				pooling = false;
			},
		}),
		getFreeCase: build.query({
			query: () => ({
				url: 'api/freecase',
			}),
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCaseQuery,
	useGetLoyalityQuery,
	useGetPayWinnerQuery,
	useGetWinSkinsQuery,
	useGetFreeCaseQuery,
	useGetStatQuery
} = caseApi;