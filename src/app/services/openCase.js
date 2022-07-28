import { axiosAuthBaseQuery } from './baseQueries';

export const OpenCase = (id) => axiosAuthBaseQuery.post('/api/case/open', { id });
export const OpenFreeCase = (id) => axiosAuthBaseQuery.post('/api/freecase/open', { id });
