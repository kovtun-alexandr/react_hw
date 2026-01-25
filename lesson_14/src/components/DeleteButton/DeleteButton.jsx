import styles from './DeleteButton.module.css'

function DeleteButton({ onClick, title }) {
    return (
        <button
            title={title}
            className={styles.del}
            onClick={onClick}
        >
            ❌
        </button>
    );
}

export default DeleteButton;