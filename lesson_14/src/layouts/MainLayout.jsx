import Header from "@/layouts/components/header/Header";
import Footer from "@/layouts/components/footer/Footer";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;