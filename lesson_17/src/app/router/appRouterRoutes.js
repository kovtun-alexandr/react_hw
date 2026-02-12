import { frontRoutes } from "@/shared/config/routes/frontRoutes"

// const pages = import.meta.glob('../../pages/**/index.js')

// const pagesList = Object.keys(frontRoutes.pages)

// export const appRouterRoutes = pagesList.map((page) => {
//     const path = `../../pages/${page}/index.js`

//     return {
//         ...frontRoutes.pages[page],
//         lazy: async () => {
//             const importer = pages[path]
//             if (!importer) throw new Error(`Page module not found: ${path}`)
//             const mod = await importer()
//             return { Component: mod.default }
//         },
//     }
// })

const pages = import.meta.glob('../../pages/**/index.js')

const lazyPage = (path) => async () => {
    const importer = pages[path]
    if (!importer) throw new Error(`Page module not found: ${path}`)
    const mod = await importer()
    return { Component: mod.default }
}

export const appRouterRoutes = [
    {
        path: '',
        lazy: lazyPage('../../pages/home/index.js'),
    },
    {
        path: 'login',
        lazy: lazyPage('../../pages/login/index.js'),
    },
    {
        path: 'posts',
        lazy: lazyPage('../../pages/post/index.js'),
        children: [
            {
                path: 'new',
                lazy: lazyPage('../../pages/postUpsert/index.js'),
            },
            {
                path: ':id/edit',
                lazy: lazyPage('../../pages/postUpsert/index.js'),
            },
        ],
    },
    {
        path: 'users',
        lazy: lazyPage('../../pages/user/index.js'),
    },
]
