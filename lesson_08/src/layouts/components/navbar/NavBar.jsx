import { NavLink } from 'react-router'
import frontRouters from "../../../routes/frontRoutes";
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.navigate}>
            <NavLink
                to={frontRouters.pages.teachers.root}
                className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
            >
                Вчителі
            </NavLink>
            <NavLink
                to={frontRouters.pages.meeting}
                className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
            >
                Збори
            </NavLink>
            <NavLink
                to={frontRouters.pages.aboutApp}
                className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
            >
                Про додаток
            </NavLink>
            <NavLink
                to={frontRouters.pages.aboutDev}
                className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
            >
                Про розробника
            </NavLink>
        </nav>
    );
}

export default NavBar;