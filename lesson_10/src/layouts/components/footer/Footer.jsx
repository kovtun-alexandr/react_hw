import styles from './Footer.module.css'

function Footer() {
    const year = `2025 - ${new Date().getFullYear()}`
    return (
        <footer>
            <div className={`container ${styles.copy}`}>
                <p>© {year} Euro Travel website</p>
            </div>
        </footer>
    );
}

export default Footer;