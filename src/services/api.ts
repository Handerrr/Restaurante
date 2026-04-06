import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../models/Restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
    }),
    getPratos: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
})

export const { useGetRestaurantsQuery, useGetPratosQuery } = api
export default api
