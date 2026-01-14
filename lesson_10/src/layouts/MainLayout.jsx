import { Outlet } from "react-router"
import Header from "@/layouts/components/header/Header";
import Footer from "@/layouts/components/footer/Footer";
import TravelRoutesProvider from "@/providers/TravelRoutesProvider";
import HotelsProvider from "@/providers/HotelsProvider";

function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <TravelRoutesProvider>
                    <HotelsProvider>
                        <Outlet />
                    </HotelsProvider>
                </TravelRoutesProvider>
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;