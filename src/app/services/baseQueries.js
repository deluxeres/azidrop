import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const authBaseQuery = fetchBaseQuery({
    baseUrl: 'http://91.203.176.164:9090',
    prepareHeaders: (headers) => {
        headers.set('front', 'someToken123');
        return headers;
    },
});

export const authLink = 'http://91.203.176.164/auth/steam';