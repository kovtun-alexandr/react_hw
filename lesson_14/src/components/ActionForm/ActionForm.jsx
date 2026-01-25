import { Link } from "react-router";
import styles from './ActionForm.module.css'

function ActionForm({ path, id }) {
    const buttonText = !!id ? 'Редагувати' : 'Додати'
    return (
        <div className={styles.actions}>
            <Link
                to={path}
                className="btn"
            >
                Назад
            </Link>
            <button
                className="btn"
            >
                {buttonText}
            </button>
        </div>
    );
}

export default ActionForm;