import { Fragment } from "react";

export function CommentItem({ comment, actions }) {
    return (
        <li className="block-item">
            <p className="text">
                <b className="text-[var(--cp-neon-cyan)]">{comment.authorName}</b>: {comment.text}
            </p>
            {!!actions && <div className="flex gap-2 mt-1">
                {actions.map((action, index) => (
                    <Fragment key={index}>
                        {action}
                    </Fragment>
                ))}
            </div>
            }
        </li>
    );
}