import { useState } from "react"
import { useDeleteCommentMutation } from "./useDelete"

export const useDeleteComment = () => {
    const [isDeleting, setIsDeleting] = useState(false)
    const [deleteComment, { error }] = useDeleteCommentMutation()

    const onDelete = async (Id) => {
        setIsDeleting(true)
        try {
            await deleteComment(Id).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return {
        onDelete,
        isDeleting,
        error
    }
}