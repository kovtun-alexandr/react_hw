import Header from "@/layouts/components/header/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";


function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;