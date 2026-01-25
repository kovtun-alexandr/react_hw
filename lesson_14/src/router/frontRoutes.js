export default {
    pages: {
        home: '/',
        doctors: {
            root: 'doctors',
            add: 'new',
            edit: ':id',
        },
        patients: {
            root: 'patients',
            add: 'new',
            edit: ':id',
            card: 'card/:id',
        },
        appointments: {
            root: 'appointments',
            add: 'new',
            edit: ':id',
        },
        notFound: '*',
    },
    navigate: {
        home: '/',
        doctors: {
            root: '/doctors',
            add: '/doctors/new',
            edit: (id) => `/doctors/${id}`,
        },
        patients: {
            root: '/patients',
            add: '/patients/new',
            edit: (id) => `/patients/${id}`,
            card: (id) => `/patients/card/${id}`,
        },
        appointments: {
            root: '/appointments',
            add: '/appointments/new',
            edit: (id) => `/appointments/${id}`,

        },
    },
}