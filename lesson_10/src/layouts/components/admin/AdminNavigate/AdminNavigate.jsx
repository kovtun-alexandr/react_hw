import { NavLink } from "react-router";
import styles from './AdminNavigate.module.css'
import { useMenuRoutes } from "@/hooks/useMenuRoutes";

function AdminNavigate() {
    const adminMenu = useMenuRoutes('admin')
    return (
        <nav className={styles.adminNavigave}>
            {adminMenu.map((route) =>
                <NavLink
                    key={route.id}
                    to={route.path ?? '.'}
                    title={route.handle.description}
                    end
                    className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
                >
                    {route.handle.title}
                </NavLink>
            )}
        </nav>
    );
}

export default AdminNavigate;