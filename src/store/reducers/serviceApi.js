import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://79.174.82.88/api/',
  }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => 'service',
    }),
    addTask: builder.mutation({
      query: (body) => ({
        url: 'task',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetServicesQuery, useAddTaskMutation } = serviceApi;
export default serviceApi;
