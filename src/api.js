import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://httpbin.org' }),
    endpoints: build => ({
        getTest: build.query({
            query: () => ({ url: '/get' })
        })
    })
})

export const {
    useGetTestQuery
} = api;
