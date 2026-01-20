import Home from "@/pages/home/Home"
import { createBrowserRouter } from "react-router"
import frontRoutes from "./frontRoutes"
import MainLayout from "@/layouts/MainLayout"
import PageError from "@/pages/error/PageError"
import { lazy } from "react"

export const routes = [
    {
        element: <MainLayout />,
        errorElement: <PageError />,
        children: [
            {
                id: 'home',
                path: frontRoutes.pages.home,
                element: <Home />,
                handle: {
                    title: 'Home',
                    description: 'Main page',
                    menus: ['main'],
                    roles: ['guest', 'admin', 'manager', 'user'],
                },
            },
            {
                id: 'products',
                path: frontRoutes.pages.products.root,
                lazy: async () => {
                    const { default: Component } = await import('@/pages/products/ProductsManager')
                    return { Component }
                },
                handle: {
                    title: 'Products',
                    description: 'Page Products',
                    menus: ['main'],
                    roles: ['guest', 'admin', 'manager', 'user'],
                },
            },
            {
                id: 'product-detail',
                path: frontRoutes.pages.products.detail,
                lazy: async () => {
                    const { default: Component } = await import('@/pages/products/ProductsDetail')
                    return { Component }
                },
                handle: {
                    title: 'Product Detail',
                    description: 'Single product page',
                    menus: [],
                    roles: ['guest', 'admin', 'manager', 'user'],
                },
            },
            {
                id: 'product-add',
                path: frontRoutes.pages.products.add,
                lazy: async () => {
                    const { default: Component } = await import('@/pages/products/ProductsAdd')
                    return { Component }
                },
                handle: {
                    title: 'Product Add',
                    description: 'Product add page',
                    menus: [],
                    roles: ['guest', 'admin', 'manager', 'user'],
                },
            },
            {
                id: 'posts',
                path: frontRoutes.pages.posts,
                lazy: async () => {
                    const { default: Component } = await import('@/pages/posts/PostsManager')
                    return { Component }
                },
                handle: {
                    title: 'Posts',
                    description: 'Page Posts',
                    menus: ['main'],
                    roles: ['guest', 'admin', 'manager', 'user'],
                },
            },
            {
                id: 'about',
                path: frontRoutes.pages.about,
                lazy: async () => {
                    const { default: Component } = await import('@/pages/about/About')
                    return { Component }
                },
                handle: {
                    title: 'About',
                    description: 'Info about',
                    menus: ['main'],
                    roles: ['guest', 'admin', 'manager', 'user'],
                },
            },
            {
                id: '404',
                path: frontRoutes.pages.notFound,
                lazy: async () => {
                    const { default: Component } = await import('@/pages/404/Page404')
                    return { Component }
                },
                handle: {
                    title: 'Page Error',
                    description: 'Info about error',
                    menus: [],
                },
            },
        ]
    }
]

const router = createBrowserRouter(routes)

export default router