import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
    return (
        <>
            <Header />
            <main className="page">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;