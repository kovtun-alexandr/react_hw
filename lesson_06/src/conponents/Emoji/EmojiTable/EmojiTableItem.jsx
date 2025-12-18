import { memo } from "react";
import EmojiTableIData from "./EmojiTableIData";

function EmojiTableItem({ name, htmlCode, unicode }) {
    console.log("Render Item")
    const htmlCodeEl = htmlCode[0];
    const code = htmlCodeEl.replace("&#", "").replace(";", "");
    const emoji = String.fromCodePoint(Number(code));
    return (
        <tr>
            <EmojiTableIData children={name} />
            <EmojiTableIData children={htmlCodeEl} />
            <EmojiTableIData children={unicode[0]} />
            <EmojiTableIData children={emoji} />
        </tr>
    );
}

export default memo(EmojiTableItem);