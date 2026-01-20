import PostsCard from "@/components/PostsCard/PostsCard";

function PostsList({ posts }) {
    return (
        <ul className="posts-list">
            {posts.map(post => (
                <PostsCard
                    key={post.id}
                    post={post}
                />
            ))}
        </ul>
    );
}

export default PostsList;