import { useDeleteComment } from "../model/useDeleteComment";

export function DeleteCommentButton({ id }) {
    const { onDelete, isDeleting } = useDeleteComment()
    const handleClick = () => onDelete(id)
    const lableButton = isDeleting ? '♻️' : '🗑️'
    return (
        <button
            onClick={handleClick}
            disabled={isDeleting}
            className="btn-neon"
            title="Видалити"
        >
            {lableButton}
        </button>
    );
}