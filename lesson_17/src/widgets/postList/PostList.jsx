import { PostCard } from "@/entities/post";
import { DeletePostButton } from "@/features/post/delete";
import { EditPostButton } from "@/features/post/edit/insex";
import { CommentToggleButton } from "@/features/post/postComments";
import { PostComments } from "@/features/post/postComments";
import { roles } from "@/shared/config/roles";
import { useState } from "react";

export function PostList({ posts, user }) {
    const [openComments, setOpenComments] = useState({})

    const toggleComments = (postId) => {
        setOpenComments(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }))
    }

    const isAdmin = user?.role === roles.admin
    const isManager = user?.role === roles.manager

    const canDelete = isAdmin || isManager
    return (
        <ul>
            {posts.map(post => {
                const isOpen = !!openComments[post.id]

                return (
                    < PostCard
                        key={post.id}
                        post={post}
                        actions={[
                            <CommentToggleButton
                                key="toggle"
                                isOpen={isOpen}
                                toggle={() => toggleComments(post.id)}
                            />,
                            canDelete && (
                                <EditPostButton
                                    post={post}
                                />
                            ),
                            canDelete && (<DeletePostButton
                                key="delete"
                                id={post.id}
                            />),
                        ]}
                        comments={[
                            <PostComments
                                key="comments"
                                postId={post.id}
                                isOpen={isOpen}
                                user={user}
                                canDelete={canDelete}
                            />
                        ]}
                    />
                )
            })}
        </ul>
    );
}