import { Fragment } from "react";

export function PostCard({ post, actions, comments }) {
    return (
        <li className="block-col">
            <h2 className="title-2">
                {post.title}
            </h2>
            <p className="text">
                {post.body}
            </p>
            <div className="text">
                Автор: <span className=" text-pink">
                    {post.author?.name}
                </span>
            </div>
            {!!actions && <div className="wrap">
                {actions.map((render, index) => (
                    <Fragment key={index}>
                        {render}
                    </Fragment>
                ))}
            </div>
            }
            {!!comments && (
                comments.map((render, index) => (
                    <Fragment key={index}>
                        {render}
                    </Fragment>
                ))
            )}
        </li>
    );
}