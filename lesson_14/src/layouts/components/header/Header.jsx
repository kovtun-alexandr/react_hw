import MainMenu from '@/layouts/components/mainmenu/MainMenu';
import styles from './Header.module.css'
import logo from '@/assets/logo.png'
import frontRoutes from '@/router/frontRoutes';
import { Link, useLocation } from 'react-router';

function Header() {
    const home = frontRoutes.navigate.home
    const location = useLocation()
    const isHome = location.pathname === home
    return (
        <header>
            <div className="container">
                <div className={styles.headerWrap}>
                    <Link
                        className={`${styles.logo} ${isHome ? styles["no-hover"] : ""}`}
                        to={home}
                        aria-label='Go to home'
                    >
                        <img src={logo} alt="Logo" />
                    </Link>
                    <MainMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;