import { useDeleteUser } from "../model/useDeleteUser";

export function UserDeleteButton({ id }) {
    const { onDelete, isDeleting } = useDeleteUser()
    const handleDelete = () => onDelete(id)
    const lableButton = isDeleting ? '♻️' : '🗑️'
    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="btn-neon"
        >
            {lableButton}
        </button>
    );
}