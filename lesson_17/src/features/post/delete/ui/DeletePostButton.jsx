import { useDeletePost } from "../model/useDeletePost";

export function DeletePostButton({ id }) {
    const { onDelete, isDeleting, error } = useDeletePost()
    const handleClick = () => onDelete(id)
    const lableButton = isDeleting ? 'Видаляється...' : 'Видалити'
    return (
        <button
            onClick={handleClick}
            disabled={isDeleting}
            className="btn-neon"
        >
            {lableButton}
        </button>
    );
}