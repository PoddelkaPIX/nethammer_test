import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITodoList } from './todoTypes'

export const todoApi = createApi({
  reducerPath: 'api/todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodoList, {limit: number, skip: number}>({
        query: (args) => ({
          url: "todos",
          params: {
            limit: args.limit,
            skip: args.skip
          }
        }),
    }),
  }),
})