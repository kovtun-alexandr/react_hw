import { useGetPostQuery } from "@/entities/post/api/postApi";
import { selectAuthUser } from "@/features/auth";
import { CreatePostForm } from "@/features/post";
import { PaginationsBlock } from "@/shared/ui/paginationsBlock/PaginationsBlock";
import { PostList } from "@/widgets/postList/PostList";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function PostsPage() {
    const user = useSelector(selectAuthUser)
    const [page, setPage] = useState(1)
    const limit = 10

    const { data, isLoading, error, refetch } = useGetPostQuery({ page, limit })

    if (isLoading) return <div>Завантаження оголошень...</div>
    if (error) return <div>Помилка: {error.toString()}</div>

    const posts = data.items || []
    const totalPages = data?.totalPages || 1

    const canCreatePost = !!user;
    return (
        <section className="select-wrapper">
            <h1>Публікації</h1>
            {canCreatePost && (
                <CreatePostForm
                    onSuccess={() => refetch()}
                />
            )}
            <PostList
                posts={posts}
                user={user}
            />
            <PaginationsBlock
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </section>);
}