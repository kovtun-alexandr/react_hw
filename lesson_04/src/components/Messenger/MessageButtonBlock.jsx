import MessageDislike from "./MessageDislike";
import MessageLike from "./MessageLike";

function MessageButtonBlock({ id, like, dislike, addLike, addDislike }) {
    return (
        <div className="message__btn">
            <MessageLike like={like} messageId={id} addLike={addLike} />
            <MessageDislike dislike={dislike} messageId={id} addDislike={addDislike} />
        </div>
    );
}

export default MessageButtonBlock;