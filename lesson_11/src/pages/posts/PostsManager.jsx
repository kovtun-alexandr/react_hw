
import Loading from "@/components/Loading/Loading";
import { fetchPosts } from "@/redux/slices/posts/clice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "@/pages/posts/PostsList";


function PostsManager() {
    const dispatch = useDispatch()
    const { postsList, loading, error } = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
        <section className="posts">
            <div className="container flx-c g-1">
                <h1>Posts page</h1>
                {loading && <Loading />}
                <PostsList
                    posts={postsList}
                />
            </div>
        </section>
    );
}

export default PostsManager;