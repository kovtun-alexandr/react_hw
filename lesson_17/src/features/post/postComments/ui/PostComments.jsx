import { DeleteCommentButton } from "@/features/comment/delete"
import { usePostComments } from "../model/usePostComments"
import { CommentItem } from "@/entities/post"
import { CreateComment } from "@/features/comment"

export function PostComments({ postId, isOpen, user, canDelete }) {
    const {
        comments,
        isLoading,
        error,
    } = usePostComments({ postId, isOpen })

    if (!isOpen) return null
    return (
        <div className="wrap-col w-full">
            {isLoading && <p className="text">Завантаження...</p>}
            {error && <p className="text-pink">Помилка завантаження</p>}

            {!!user && <CreateComment postId={postId} />}
            {!isLoading && !error && (
                comments?.length > 0 ? (
                    <ul className="wrap-col">
                        {comments.map(comment => (
                            <CommentItem
                                key={comment.id}
                                comment={comment}
                                actions={[
                                    canDelete && (<DeleteCommentButton
                                        id={comment.id}
                                    />)
                                ]}
                            />
                        ))}
                    </ul>
                ) : (
                    <p className="text-[var(--cp-text-dim)]">Немає коментарів</p>
                )
            )}
        </div>
    )

}