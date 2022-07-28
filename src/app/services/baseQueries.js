import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import axios from 'axios';

export const apiHost = process.env.NODE_ENV === "development" ? '142.93.237.47' : window.location.hostname;
export const baseUrl = '//' + apiHost;
export const authLink = '//' + apiHost + '/auth/steam';

export const defaultBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
});

export const authBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
        if (process.env.NODE_ENV === "development") {
            headers.set('front', 'someToken123');
        }
        
        return headers;
    },
});

export const axiosAuthBaseQuery = axios.create({
    baseURL: baseUrl,
    headers: process.env.NODE_ENV === "development" ? { 'front': 'someToken123' } : null,
});

export const axiosQuery = axios.create({
    baseURL: baseUrl,
});
