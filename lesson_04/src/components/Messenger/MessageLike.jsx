import { useState } from "react";

function MessageLike({ messageId, like, addLike }) {
    const [count, setCount] = useState(like)

    function handleClick() {
        const newCount = count + 1
        setCount(newCount)
        addLike(messageId, newCount)
    }
    return (
        <button
            className="addLike"
            onClick={handleClick}
        >
            👍 {!!count && count}
        </button>
    );
}

export default MessageLike;