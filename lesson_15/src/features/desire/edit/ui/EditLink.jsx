import frontRoutes from "@/app/router/frontRoutes";
import { Link } from "react-router";
import styles from './EditLink.module.css'

function EditLink({ id }) {
    return (
        <Link
            className={styles.edit}
            to={frontRoutes.navigate.desires.edit(id)}
            title="Edit desire"
        >
            ✏️
        </Link>
    );
}

export default EditLink;