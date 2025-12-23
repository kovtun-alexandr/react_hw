import { NavLink } from "react-router";
import styles from "./NavBar.module.css"
import frontRoutes from "../../router/frontRoutes";

function NavBar() {
    const routNavigate = frontRoutes.navigate
    return (
        <nav className={styles.navigate}>
            <NavLink to={routNavigate.home} className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>Home</NavLink>
            <NavLink to={routNavigate.products} className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>Products</NavLink>
            <NavLink to={routNavigate.cart} className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>Cart</NavLink>
            <NavLink to={routNavigate.contacts} className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>Contacts</NavLink>
        </nav>
    );
}

export default NavBar;