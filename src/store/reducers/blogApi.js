import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://79.174.82.88/api/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'blog',
    }),
    getPostById: builder.query({
      query: (id) => `blog/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = blogApi;

export default blogApi;
