import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../models/Restaurant'

type CheckoutPayload = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type CheckoutResponse = {
  orderId: string
}

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
    checkout: builder.mutation<CheckoutResponse, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetRestaurantsQuery,
  useGetPratosQuery,
  useCheckoutMutation,
} = api
export default api
