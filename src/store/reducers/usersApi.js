import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://79.174.82.88/api/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'user/all',
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
export default usersApi;
