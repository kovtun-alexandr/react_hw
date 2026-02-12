import { useGetCommentsByPostQuery } from "@/entities/post/comments/api/commentApi"

export const usePostComments = ({ postId, isOpen }) => {
    const { data = [], isLoading, error } = useGetCommentsByPostQuery(
        postId,
        { skip: !isOpen },
    )

    return {
        comments: data,
        isLoading,
        error,
    }
}