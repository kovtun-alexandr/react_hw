import MessageButtonBlock from "./MessageButtonBlock";

function Message({ id, text, like, dislike, addLike, addDislike }) {
    return (
        <div className="message__item">
            <div className="message__text">
                {text}
            </div>
            <MessageButtonBlock
                id={id}
                like={like}
                dislike={dislike}
                addLike={addLike}
                addDislike={addDislike}
            />
        </div>
    );
}

export default Message;