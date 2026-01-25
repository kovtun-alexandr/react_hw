import loading from '@/assets/icon/tube-spinner.svg'
import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loadeng}>
            <img src={loading} alt="Loading" />
        </div>
    );
}

export default Loading;