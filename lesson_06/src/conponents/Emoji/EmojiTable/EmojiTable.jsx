import EmojiTableBody from "./EmojiTableBody";
import EmojiTableHead from "./EmojiTableHead";

function EmojiTable({ emojies }) {
    console.log("Render Table")
    return (
        <div className="table__wrap">
            <table>
                <EmojiTableHead />
                <EmojiTableBody emojies={emojies} />
            </table>
        </div>
    );
}

export default EmojiTable;