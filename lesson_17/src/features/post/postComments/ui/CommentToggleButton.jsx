export function CommentToggleButton({ isOpen, toggle }) {
    return (
        <button
            onClick={toggle}
            className="btn-neon"
        >
            {isOpen ? "Сховати коментарі" : "Показати коментарі"}
        </button>
    );
}