import { Link } from 'react-router';
import styles from './EditButton.module.css'

function EditButton({ path, title }) {
    return (
        <Link
            title={title}
            className={styles.edit}
            to={path}
        >
            ✏️
        </Link>
    );
}

export default EditButton;