import spinner from './../../assets/icon/tube-spinner.svg'
import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loading}>
            <img className={styles.spinner} src={spinner} alt="Loading" />
        </div>
    );
}

export default Loading;