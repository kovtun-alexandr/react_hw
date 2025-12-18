import { memo } from "react";
import EmojiTableItem from "./EmojiTableItem";

function EmojiTableBody({ emojies }) {
    console.log("Render List")
    return (
        <tbody>
            {emojies && emojies.length > 0 &&
                (emojies?.map((emoji, i) => (
                    <EmojiTableItem key={i} {...emoji} />
                )))
            }
        </tbody>
    );
}

export default EmojiTableBody;