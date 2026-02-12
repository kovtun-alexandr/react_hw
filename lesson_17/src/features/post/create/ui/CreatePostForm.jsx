import { useCreatePost } from "../model/useCreatePost";
import { PostForm } from "../..";

export function CreatePostForm({ onSuccess }) {
    const { onSubmit, isLoading } = useCreatePost()

    const handleCreate = async (data) => {
        await onSubmit(data);
        if (onSuccess) onSuccess()
    }
    return (
        <PostForm
            initialValues={{
                title: "", body: ""
            }}
            onSubmit={handleCreate}
            isLoading={isLoading}
            submitText="Створити пост"
            titleText="Додати пост"
        />
    );
}