import { useDeleteItemMutation } from "../model/deleteAps";
import styles from './DeleteDesireButton.module.css'

function DeleteDesireButton({ id }) {
    const [deleteItem, { isLoading, error }] = useDeleteItemMutation()
    const handleDelete = async () => {
        if (confirm('Are you shure?')) {
            try {
                await deleteItem(id)
            } catch (error) {
                alert('Error!')
            }
        }
    }
    const buttonLabel = isLoading ? '♻️' : '❌'
    return (
        <button
            className={styles.del}
            onClick={handleDelete}
            title="Delete"
        >
            {buttonLabel}
        </button>
    );
}

export default DeleteDesireButton;