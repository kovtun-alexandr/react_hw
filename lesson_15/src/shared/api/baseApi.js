import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from "../services/DbOperations";

export const db = new DbOperations('desire')

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['DesireItem', 'DesireItemsList'],
    endpoints: () => ({}),
})