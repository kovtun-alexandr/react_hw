import styles from './PostsCard.module.css'

function PostsCard({ post }) {
    return (
        <li className={styles['post-card']}>
            {post.title}
        </li>
    );
}

export default PostsCard;