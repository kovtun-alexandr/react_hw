import { createBrowserRouter } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/components/admin/AdminLayout";
import PageError from "@/peges/error/PageError";
import Home from "@/peges/home/Home";
import AdminGuard from "@/guards/AdminGuard";

export const routes = [
    {
        element: <MainLayout />,
        errorElement: <PageError />,
        children: [
            {
                id: 'home',
                index: true,
                element: <Home />,
                handle: {
                    title: 'Home',
                    description: 'Main page',
                    menus: ['main'],
                    roles: ['guest', 'admin'],
                },
            },
            {
                id: 'travels',
                path: "/travels",
                lazy: async () => {
                    const { default: Component } = await import('@/peges/travel/TravelManager')
                    return { Component }
                },
                handle: {
                    title: 'Travels',
                    description: 'Page Travels',
                    menus: ['main'],
                    roles: ['guest', 'admin'],
                },
            },
            {
                id: 'hotels',
                path: "/hotels",
                lazy: async () => {
                    const { default: Component } = await import('@/peges/hotel/HotelManager')
                    return { Component }
                },
                handle: {
                    title: 'Hotels',
                    description: 'Page Hotels',
                    menus: [],
                    roles: ['guest', 'admin'],
                },
            },
            {
                id: 'about',
                path: "/about",
                lazy: async () => {
                    const { default: Component } = await import('@/peges/about/About')
                    return { Component }
                },
                handle: {
                    title: 'About us',
                    description: 'Info about us',
                    menus: ['main'],
                    roles: ['guest', 'admin'],
                },
            },
            {
                id: 'cart',
                path: "/cart",
                lazy: async () => {
                    const { default: Component } = await import('@/peges/cart/CartManager')
                    return { Component }
                },
                handle: {
                    title: 'Cart',
                    description: 'Page Cart',
                    menus: [],
                    roles: ['guest', 'admin'],
                },
            },
            {
                id: 'admin',
                path: "/admin",
                handle: {
                    title: 'Admin',
                    description: 'Page Admin',
                    menus: ['main'],
                    roles: ['admin'],
                },
                element: (
                    <AdminGuard>
                        <AdminLayout />
                    </AdminGuard>
                ),
                children: [
                    {
                        id: 'admin-dashboard',
                        index: true,
                        lazy: async () => {
                            const { default: Component } = await import('@/peges/admin/AdminManager')
                            return { Component }
                        },
                        handle: {
                            title: 'Admin',
                            description: 'Page Admin Manager',
                            menus: ['admin'],
                            roles: ['admin'],
                        },
                    },
                    {
                        id: 'admin-order',
                        path: "orders",
                        lazy: async () => {
                            const { default: Component } = await import('@/peges/admin/AdminOrders/AdminOrders')
                            return { Component }
                        },
                        handle: {
                            title: 'Orders',
                            description: 'Page Admin Order',
                            menus: ['admin'],
                            roles: ['admin'],
                        },
                    }, {
                        id: 'admin-order-edit',
                        path: 'orders/:id',
                        lazy: async () => {
                            const { default: Component } = await import('@/peges/admin/AdminEdit/AdminEdit')
                            return { Component }
                        },
                        handle: {
                            title: 'Edit',
                            description: 'Page Edit Order',
                            menus: [],
                            roles: ['admin'],
                        },
                    }
                ]
            },
            {
                id: '404',
                path: "*",
                lazy: async () => {
                    const { default: Component } = await import('../peges/404/Page404')
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
];

const router = createBrowserRouter(routes)

export default router