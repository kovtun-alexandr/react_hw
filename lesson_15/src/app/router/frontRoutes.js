export default {
    pages: {
        home: '/',
        desires: {
            root: 'desires',
            add: 'new',
            edit: ':id/edit',
        },
        about: 'about',
        notFound: '*',
    },
    navigate: {
        home: '/',
        desires: {
            root: '/desires',
            add: '/desires/new',
            edit: (id) => `/desires/${id}/edit`,
        },
        about: 'about',
    }
}