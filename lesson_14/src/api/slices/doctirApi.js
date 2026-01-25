import { api } from "..";

export const doctorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDoctors: builder.query({
            query: () => '/doctors',
            providesTags: ['Doctors'],
        }),
        getDoctorById: builder.query({
            query: (id) => `/doctors/${id}`,
            providesTags: (result, error, id) => [{ type: 'Doctor', id }],
        }),
        createDoctor: builder.mutation({
            query: (data) => ({
                url: '/doctors',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Doctors']
        }),
        putDoctorById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/doctors/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Doctor', id },
                'Doctors'
            ],
        }),
        deleteDoctor: builder.mutation({
            query: (id) => ({
                url: `/doctors/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Doctor', id },
                'Doctors',
                'Appointments',
            ],
        }),
    }),
})

export const {
    useGetDoctorsQuery,
    useGetDoctorByIdQuery,
    useCreateDoctorMutation,
    usePutDoctorByIdMutation,
    useDeleteDoctorMutation,
} = doctorApi