import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://79.174.82.88/api/',
  }),
  tagTypes: ['Reviews'],
  endpoints: (build) => ({
    getReviews: build.query({
      query: () => ({
        url: 'review',
      }),
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;

export default reviewsApi;
