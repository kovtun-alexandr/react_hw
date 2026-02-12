import { roles } from "../roles";

export const frontRoutes = {
    pages: {
        home: {
            path: '',
            navsgationPath: '/',
            meta: {
                title: 'Головна',
                isInMenu: true,
                requireAuth: false,
            },
        },
        login: {
            path: 'login',
            navsgationPath: '/login',
            meta: {
                title: 'Авторизація',
                isInMenu: false,
                requireAuth: false,
            },
        },
        user: {
            path: 'users',
            navsgationPath: '/users',
            meta: {
                title: 'Користувачі',
                isInMenu: true,
                requireAuth: true,
                roles: [roles.admin],
            },
        },
        post: {
            path: 'posts',
            navsgationPath: '/posts',
            meta: {
                title: 'Публікації',
                isInMenu: true,
                requireAuth: false,
            },

        },
        404: {
            path: '*',
            meta: {
                title: 'Сторінка не знайдена',
                isInMenu: false,
                requireAuth: false,
            },
        },
        forbidden: {
            path: 'forbidden',
            navsgationPath: '/forbidden',
            meta: {
                title: 'Заборонено',
                isInMenu: false,
                requireAuth: false,
            },
        },
    }
}

export function getPagesObjectList() {
    const pagesList = Object.keys(frontRoutes.pages)
    return pagesList.map((page) => frontRoutes.pages[page])
}