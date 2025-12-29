export default {
    pages: {
        home: '/',
        teachers: {
            root: '/teachers',
            add: 'new',
            edit: ':id/edit',
            detail: ':id'
        },
        meeting: '/meeting',
        aboutApp: '/about-app',
        aboutDev: '/about-dev',
        notFound: '*'
    },
    navigate: {
        home: '/',
        teachers: {
            root: '/teachers',
            add: 'teachers/add',
            edit: '/teachers/:id/edit',
            detail: '/teachers/:id'
        },
        meeting: '/meeting',
        aboutApp: '/about-app',
        aboutDev: '/about-dev'
    }
}