import { Link, useLocation } from 'react-router'
import frontRouters from "../../../routes/frontRoutes";
import NavBar from "../navbar/NavBar";
import styles from './Header.module.css'
import logo from './../../../assets/logo.svg'
import frontRoutes from '../../../routes/frontRoutes';

function Header() {
    const home = frontRoutes.pages.home
    const location = useLocation()
    const isHome = location.pathname === home
    return (
        <header className={styles.header}>
            <div className="container flx jc-sb">
                <Link
                    to={frontRouters.pages.home}
                    className={[styles['logo-inner'], isHome ? `${styles.home}` : ''].join(' ')}
                >
                    <img className={styles.logo} src={logo} alt="Logo" />
                </Link>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;