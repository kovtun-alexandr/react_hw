import MainLayout from "../layouts/MainLayout";
import frontRoutes from "./frontRoutes";
import HomeManager from "@/pages/Home/HomeManager";
import DesireManager from "@/pages/Desire/DesireManager";
import EditDesire from "@/pages/Desire/EditDesire";
import AboutManager from "@/pages/About/AboutManager";
import PageNotFound from "@/pages/404/PageNotFound";

export const routes = [
    {
        Component: MainLayout,
        children: [
            {
                path: frontRoutes.pages.home,
                Component: HomeManager,
                meta: {
                    title: 'Home'
                },
            },
            {
                path: frontRoutes.pages.desires.root,
                meta: {
                    title: 'Desires'
                },
                children: [
                    {
                        index: true,
                        Component: DesireManager,
                    },
                    {
                        path: frontRoutes.pages.desires.add,
                        Component: EditDesire,
                    },
                    {
                        path: frontRoutes.pages.desires.edit,
                        Component: EditDesire,
                    },
                ],
            },
            {
                path: frontRoutes.pages.about,
                Component: AboutManager,
                meta: {
                    title: 'About'
                },
            },
            {
                path: frontRoutes.pages.notFound,
                Component: PageNotFound,
            },
        ],
    },
]