import { axiosAuthBaseQuery } from './baseQueries';

export const OpenCase = (id) => axiosAuthBaseQuery.post('/api/case/open', { id });
