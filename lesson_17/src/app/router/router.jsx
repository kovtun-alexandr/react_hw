import { createBrowserRouter } from "react-router";
import { Mutex } from "async-mutex";
import { authCheckLoader } from "./authCheckLoader";
import { MainLayout } from "@/widgets/layouts/MainLayout";
import { appRouterRoutes } from "./appRouterRoutes";


const refreshMutex = new Mutex()

const authLoader = authCheckLoader({
    refreshMutex,
})

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: appRouterRoutes.map((route) => ({
            ...route,
            loader: () => authLoader(route),
        })),
    },
])