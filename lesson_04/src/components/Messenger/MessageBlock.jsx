import { useEffect, useRef, useState } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

const messageList = [
    {
        id: 1765035022521,
        text: 'Hello',
        like: 1,
        dislike: 3
    },
    {
        id: 1765035022522,
        text: 'Hi',
        like: 0,
        dislike: 0
    },
    {
        id: 1765035022523,
        text: 'How are you?',
        like: 5,
        dislike: 1
    },
    {
        id: 1765035022524,
        text: 'i`m fine. And you?',
        like: 0,
        dislike: 2
    }
]

function MessageBlock() {
    const ref = useRef(null)
    const [messages, setMessages] = useState(() => [...messageList])

    function addMessage(message) {
        setMessages(prev => [
            ...prev, {
                id: new Date().getTime(),
                text: message,
                like: 0,
                dislike: 0
            }
        ])
    }

    function addLike(messageId, count) {
        setMessages(prev =>
            prev.map(msg =>
                msg.id === messageId
                    ? { ...msg, like: count }
                    : msg
            )
        )
    }

    function addDislike(messageId, count) {
        setMessages(prev =>
            prev.map(msg =>
                msg.id === messageId
                    ? { ...msg, dislike: count }
                    : msg
            )
        )
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [messages])

    return (
        <div className="messageBlock">
            <h2>Messenger</h2>
            <MessageList messages={messages} addLike={addLike} addDislike={addDislike} scrollRef={ref} />
            <MessageForm addMessage={addMessage} />
        </div>
    );
}

export default MessageBlock;