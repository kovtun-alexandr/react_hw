import { api } from '..'

export const patientApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPatients: builder.query({
            query: (name) => {
                if (!name || name.trim() === '') {
                    return '/patients'
                }
                return `/patients?name=${name}`
            },
            providesTags: ['Patients']
        }),
        getPatientById: builder.query({
            query: (id) => `/patients/${id}`,
            providesTags: (result, error, id) => [{ type: 'Patient', id }],
        }),
        createPatient: builder.mutation({
            query: (data) => ({
                url: '/patients',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Patients']
        }),
        putPatientById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/patients/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Patient', id },
                'Patients',
            ],
        }),
        deletePatient: builder.mutation({
            query: (id) => ({
                url: `/patients/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Patient', id },
                'Patients',
                'Appointments'
            ],
        }),
    }),
})

export const {
    useGetPatientsQuery,
    useGetPatientByIdQuery,
    useCreatePatientMutation,
    usePutPatientByIdMutation,
    useDeletePatientMutation,
} = patientApi