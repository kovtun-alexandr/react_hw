import NavBar from "@/layouts/components/navbar/NavBar";
import logo from '@/assets/logo.png'
import styles from './Header.module.css'

function Header() {
    return (
        <header className="container">
            <div className={styles.headerWrap}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;