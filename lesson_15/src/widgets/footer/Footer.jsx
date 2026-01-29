import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>
                    &copy; Desire App
                </p>
            </div>
        </footer>
    );
}

export default Footer;