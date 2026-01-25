import { api } from "..";

export const appointmentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAppointments: builder.query({
            query: ({ filterType = 'name', name, date } = {}) => {
                if (filterType = 'name' && name.trim() !== '') {
                    return `/appointments?patientName=${name}`
                }
                if (filterType = 'date' && date.trim() !== '') {
                    return `/appointments?date=${date}`
                }
                return '/appointments'
            },
            providesTags: ['Appointments'],
        }),
        getAppointmentById: builder.query({
            query: (id) => `/appointments/${id}`,
            providesTags: (result, error, id) => [{ type: 'Appointment', id }],
        }),
        createAppointment: builder.mutation({
            query: (data) => ({
                url: '/appointments',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Appointments']
        }),
        putAppointmentById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/appointments/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Appointment', id },
                'Appointments'
            ],
        }),
        deleteAppointment: builder.mutation({
            query: (id) => ({
                url: `/appointments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Appointment', id },
                'Appointments',
                'Doctors',
                'Patients'
            ],
        }),
    })
})

export const {
    useGetAppointmentsQuery,
    useGetAppointmentByIdQuery,
    useCreateAppointmentMutation,
    usePutAppointmentByIdMutation,
    useDeleteAppointmentMutation,
} = appointmentApi