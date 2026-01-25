import { NavLink } from "react-router";
import styles from './MainMenu.module.css'
import { routes } from "@/router/routes";

function MainMenu() {
    const mainMenu = routes[0].children.filter(route => route?.meta?.title)
    return (
        <nav className={styles.navigate}>
            {mainMenu.map((route, index) =>
                <NavLink
                    key={index}
                    to={route.path ?? '/'}
                    className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
                >
                    {route.meta.title}
                </NavLink>
            )}
        </nav>
    );
}

export default MainMenu;