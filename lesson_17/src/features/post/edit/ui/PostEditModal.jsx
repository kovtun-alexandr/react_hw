import { useUpdatePostMutation } from "@/entities/post";
import { PostForm } from "../..";
import { Modal } from "@/shared/ui/Modal/Modal";

export function PostEditModal({ isOpen, onClose, post }) {
    const [updatePost, { isLoading }] = useUpdatePostMutation();

    const handleUpdate = async (data) => {
        await updatePost({
            id: post.id,
            data,
        }).unwrap()

        onClose()
    };

    if (!post) return null;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <PostForm
                initialValues={{
                    title: post.title,
                    body: post.body,
                }}
                onSubmit={handleUpdate}
                isLoading={isLoading}
                submitText="Зберегти зміни"
                titleText="Редагування поста"
            />

            <button
                type="button"
                onClick={onClose}
                className="btn-close"
                title="Закрити"
            >
                ❌
            </button>
        </Modal >
    );
}