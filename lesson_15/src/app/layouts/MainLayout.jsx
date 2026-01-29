import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
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