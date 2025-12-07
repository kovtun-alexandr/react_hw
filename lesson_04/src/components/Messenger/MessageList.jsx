import Message from "./Message";

function MessageList({ messages, addLike, addDislike, scrollRef }) {
    return (
        <>
            {messages && messages.length > 0 ? (
                <div className="message__list" ref={scrollRef}>
                    {
                        messages.map(message => (
                            <Message key={message.id} {...message} addLike={addLike} addDislike={addDislike} />
                        ))
                    }
                </div>
            ) : (
                <p>No messages</p>
            )}
        </>
    );
}

export default MessageList;