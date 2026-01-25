import { useId } from "react";
import styles from './CustomSelect.module.css'

function CustomSelect({
    label,
    name,
    value,
    selectList,
    onChange
}) {
    const selectId = useId()
    return (
        <div className={styles.row}>
            <label
                htmlFor={selectId}
            >
                {label}
            </label>
            <select
                name={name}
                id={selectId}
                value={value}
                onChange={onChange}
            >
                {selectList && selectList.map(item =>
                    <option
                        key={item.id}
                        value={item.id}
                    >
                        {item.fullName}
                    </option>
                )}
            </select>
        </div>
    );
}

export default CustomSelect;