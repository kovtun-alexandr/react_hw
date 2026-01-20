import { useMenuRoutes } from "@/hooks/useMenuRoutes";
import { NavLink } from "react-router";
import styles from './MainMenu.module.css'

function MainMenu() {
    const mainMenu = useMenuRoutes('main')
    return (
        <nav className={styles.navigate}>
            {mainMenu.map((route) =>
                <NavLink
                    key={route.id}
                    to={route.path}
                    className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
                >
                    {route.handle.title}
                </NavLink>
            )}
        </nav>
    );
}

export default MainMenu;