import { useState } from "react";
import { PostEditModal } from './PostEditModal'

export function EditPostButton({ post }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="btn-fit"
            >
                Редагувати
            </button>

            {isOpen && (
                <PostEditModal
                    isOpen={isOpen}
                    post={post}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
}