import { useDeletePostMutation } from "@/entities/post/api/postApi"
import { useState } from "react"

export const useDeletePost = () => {
    const [isDeleting, setIsDeleting] = useState(false)
    const [deletePost, { error }] = useDeletePostMutation()

    const onDelete = async (id) => {
        setIsDeleting(true)
        try {
            await deletePost(id).unwrap()
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