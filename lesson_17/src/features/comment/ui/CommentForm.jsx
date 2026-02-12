import { TextareField } from "@/shared";

export function CommentForm({ onSubmit, isLoading, content, setContent }) {
    return (
        <form
            onSubmit={onSubmit}
            className="form"
        >
            <TextareField
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={3}
                placeholder="Напишіть коментар..."
                required
            />
            <button
                type="submit"
                disabled={isLoading}
                className="btn-fit"
            >
                Додати коментар
            </button>
        </form>
    );
}