import { NavLink } from "react-router";
import styles from './NavBar.module.css'
import { useMenuRoutes } from "@/hooks/useMenuRoutes";

function NavBar() {
    const mainMenu = useMenuRoutes('main')

    return (
        <nav className={styles.navigate}>
            {mainMenu.map((route) =>
                <NavLink
                    key={route.id}
                    to={route.path ?? '.'}
                    title={route.handle.description}
                    end={route.path === '/admin'}
                    className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
                >
                    {route.handle.title}
                </NavLink>
            )}
        </nav>
    );
}

export default NavBar;