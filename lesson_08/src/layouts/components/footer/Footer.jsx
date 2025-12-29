import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>© - 2025 Додаток "Вчителі". Всі права захищено</p>
            </div>
        </footer>
    );
}

export default Footer;