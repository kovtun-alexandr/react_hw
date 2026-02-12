import { useState } from "react"
import { CommentForm } from "../../ui/CommentForm"
import { useCreateCommentMutation } from "../modul/useCreate"

export function CreateComment({ postId }) {
    const [content, setContent] = useState('')
    const [createComment, { isLoading }] = useCreateCommentMutation()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!content.trim()) return
        await createComment({ postId, text: content })
        setContent('')
    }
    return (
        <>
            <CommentForm
                onSubmit={onSubmit}
                isLoading={isLoading}
                content={content}
                setContent={setContent}
            />
        </>
    );
}