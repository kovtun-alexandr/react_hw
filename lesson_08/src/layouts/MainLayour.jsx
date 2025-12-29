import { Outlet } from 'react-router'
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function MainLayour() {
    return (
        <>
            <Header />
            <main className='page'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayour;