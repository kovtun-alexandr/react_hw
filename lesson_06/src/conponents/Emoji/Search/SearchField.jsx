import { useCallback } from "react";
import { memo, useId } from "react";

function SearchField({ setSearch }) {
    const inputId = useId()
    const handleChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [setSearch])
    console.log("Render SearchField")
    return (
        <div className="search__row">
            <label
                className="search__label"
                htmlFor={inputId}
            >
                Search:
            </label>
            <input
                className="search__input"
                type="text"
                id={inputId}
                onChange={handleChange}
            />

        </div>
    );
}

export default memo(SearchField);