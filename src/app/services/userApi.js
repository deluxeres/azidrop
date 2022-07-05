import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://91.203.176.164:9090',
		prepareHeaders: (headers) => {
            headers.set('Authorization', 'someToken123');
			return headers;
		},
	}),
	reducerPath: 'usersApi',
	endpoints: (build) => ({
		getUserData: build.query({
			query: () => ({
				url: 'api/me',
			}),
		}),
	}),
});

export const { useGetUserDataQuery } = usersApi;