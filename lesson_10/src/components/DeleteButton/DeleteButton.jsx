import styles from './DeleteButton.module.css'

function DeleteButton({ onClick }) {
    return (
        <button
            className={styles.del}
            onClick={onClick}
        >
            ❌
        </button>
    );
}

export default DeleteButton;