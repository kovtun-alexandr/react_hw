import { useState } from "react";

function MessageForm({ addMessage }) {
    const [message, setMessage] = useState('')

    function handleChange(e) {
        setMessage(e.target.value)
    }

    function handleAddMessage(e) {
        e.preventDefault()
        if (message === '') return
        addMessage(message)
        setMessage('')
    }
    return (
        <form action="#">
            <label>
                <input
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    placeholder="Type a new message"
                />
            </label>
            <button
                onClick={handleAddMessage}
            >
                Send
            </button>
        </form>
    );
}

export default MessageForm;