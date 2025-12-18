import { memo } from "react";
import SearchField from "./SearchField";

function SearchForm({ setSearch }) {
    console.log("Render SearchForm")
    return (
        <form className="search__form" action="#">
            <SearchField setSearch={setSearch} />
        </form>
    );
}

export default memo(SearchForm);