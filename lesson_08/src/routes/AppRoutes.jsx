import { Routes, Route } from "react-router"
import frontRoutes from "./frontRoutes";
import MainLayour from "../layouts/MainLayour";
import Home from "../pages/home/Home";
import TeachersList from "../pages/teachers/TeachersList";
import Meetings from "../pages/meetings/Meetings";
import InfoLayout from "../layouts/InfoLayout";
import AboutApp from "../pages/about/app/AboutApp";
import AboutDev from "../pages/about/dev/AboutDev";
import Page404 from "../pages/404/Page404";
import TeachersForm from "../pages/teachers/TeachersForm";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayour />}>
                <Route path={frontRoutes.pages.home} element={<Home />} />
                <Route path={frontRoutes.pages.teachers.root}>
                    <Route index element={<TeachersList />} />
                    <Route path={frontRoutes.pages.teachers.add} element={<TeachersForm />} />
                    <Route path={frontRoutes.pages.teachers.edit} element={<TeachersForm />} />
                </Route>
                <Route path={frontRoutes.pages.meeting} element={<Meetings />} />
            </Route>
            <Route element={<InfoLayout />}>
                <Route path={frontRoutes.pages.aboutApp} element={<AboutApp />} />
                <Route path={frontRoutes.pages.aboutDev} element={<AboutDev />} />
            </Route>
            <Route path={frontRoutes.pages.notFound} element={<Page404 />} />
        </Routes>
    );
}

export default AppRoutes;