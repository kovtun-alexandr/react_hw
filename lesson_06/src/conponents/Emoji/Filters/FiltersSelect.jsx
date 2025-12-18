import { memo, useCallback } from "react";

function FiltersSelect({ title, name, options, value, setValue }) {
    const handleChangeSelected = useCallback((e) => {
        setValue(e.target.value)

    }, [setValue])
    console.log("Render Select")
    return (
        <div className="emoji__select">
            <h3>{title}</h3>
            <select name={name} value={value} onChange={handleChangeSelected}>
                <option value="all">All</option>
                {options.map((el, i) =>
                    <option
                        key={i}
                        value={el}
                    >
                        {el}
                    </option>
                )}
            </select>
        </div>
    );
}

export default memo(FiltersSelect);