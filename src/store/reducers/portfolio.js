import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://79.174.82.88/api/',
  }),
  endpoints: (builder) => ({
    getProject: builder.query({
      query: (id = null) => 'project' + (id ? `?service_id=${id}` : ''),
    }),
    getProjectById: builder.query({
      query: (id) => `project/${id}`,
    }),
  }),
});

export const { useGetProjectQuery, useGetProjectByIdQuery } = portfolioApi;

export default portfolioApi;
