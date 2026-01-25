import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>
                    &copy; Electronic Medical Records
                </p>
            </div>
        </footer>
    );
}

export default Footer;