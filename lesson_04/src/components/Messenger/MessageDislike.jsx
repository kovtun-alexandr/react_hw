import { useState } from "react";

function MessageDislike({ messageId, dislike, addDislike }) {
    const [count, setCount] = useState(dislike)
    function handleClick() {
        const newCount = count + 1
        setCount(newCount)
        addDislike(messageId, newCount)
    }
    return (
        <button
            className="addDislike"
            onClick={handleClick}
        >
            👎 {!!count && count}
        </button>
    );
}

export default MessageDislike;