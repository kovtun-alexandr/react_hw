import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://auth-0wwn.onrender.com/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState, extra }) => {
        if (!extra?.skipAuth) {
            const token = getState().auth?.accessToken
            if (token) headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    },
})

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: ['User', 'Post', 'Comment'],
    endpoints: () => ({}),
})