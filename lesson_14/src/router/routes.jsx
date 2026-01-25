import MainLayout from "@/layouts/MainLayout";
import frontRoutes from "./frontRoutes";
import HomeManager from "@/pages/home/HomeManager";
import PatientsManager from "@/pages/patients/PatientsManager";
import DoctorsManager from "@/pages/doctors/DoctorsManager";
import AppoitmentsManager from "@/pages/appointments/AppointmentsManager";
import Page404 from "@/pages/404/Page404";
import DoctorsForm from "@/pages/doctors/DoctorsForm";
import PatientsForm from "@/pages/patients/PatientsForm";
import AppointmentsForm from "@/pages/appointments/AppointmentsForm";
import PatientsCard from "@/pages/patients/PatientsCard";

export const routes = [
    {
        path: frontRoutes.pages.home,
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomeManager,
                meta: {
                    title: 'Головна'
                },
            },
            {
                path: frontRoutes.pages.patients.root,
                meta: {
                    title: 'Пацієнти',
                },
                children: [
                    {
                        index: true,
                        Component: PatientsManager,
                    },
                    {
                        path: frontRoutes.pages.patients.add,
                        Component: PatientsForm,
                    },
                    {
                        path: frontRoutes.pages.patients.edit,
                        Component: PatientsForm,
                    },
                    {
                        path: frontRoutes.pages.patients.card,
                        Component: PatientsCard,
                    },
                ],
            },
            {
                path: frontRoutes.pages.doctors.root,
                meta: {
                    title: 'Лікарі',
                },
                children: [
                    {
                        index: true,
                        Component: DoctorsManager,
                    },
                    {
                        path: frontRoutes.pages.doctors.add,
                        Component: DoctorsForm,
                    },
                    {
                        path: frontRoutes.pages.doctors.edit,
                        Component: DoctorsForm,
                    },
                ],
            },
            {
                path: frontRoutes.pages.appointments.root,
                meta: {
                    title: 'Призначення',
                },
                children: [
                    {
                        index: true,
                        Component: AppoitmentsManager,
                    },
                    {
                        path: frontRoutes.pages.appointments.add,
                        Component: AppointmentsForm,
                    },
                    {
                        path: frontRoutes.pages.appointments.edit,
                        Component: AppointmentsForm,
                    },
                ],
            },
            {
                path: frontRoutes.pages.notFound,
                Component: Page404,
            },
        ],
    },
]