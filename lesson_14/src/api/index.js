import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://emr-clinic.onrender.com'
    }),
    tagTypes: [
        'Patient',
        'Patients',
        'Doctor',
        'Doctors',
        'Appointment',
        'Appointments',
    ],
    endpoints: () => ({}),
})