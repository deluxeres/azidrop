import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import axios from 'axios';

export const baseUrl = 'http://91.203.176.164:9090';

export const defaultBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
});

export const authBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
        headers.set('front', 'someToken123');
        return headers;
    },
});

export const axiosAuthBaseQuery = axios.create({
    baseURL: baseUrl,
    headers: { 'front': 'someToken123' }
});

export const apiHost = '91.203.176.164';
export const authLink = 'http://91.203.176.164:9090/auth/steam';