import { Link, useLocation } from 'react-router';
import NavBar from '../NavBar/NavBar';
import logo from './../../assets/logo.svg'
import frontRoutes from '../../router/frontRoutes';

function Header() {
    const home = frontRoutes.navigate.home
    const location = useLocation()
    const isHome = location.pathname === home
    return (
        <header>
            <div className="container flx-r js-sb">
                <Link
                    className={`logo ${isHome ? "no-hover" : ""}`}
                    to={home}
                    aria-label='Go to home'
                >
                    <img src={logo} alt="logo" />
                </Link>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;