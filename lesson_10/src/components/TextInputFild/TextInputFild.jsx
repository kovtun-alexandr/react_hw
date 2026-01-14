import { useId } from "react";
import styles from './TextInputFild.module.css'

function TextInputFild({ label, name, value, onChange, placeholder }) {
    const textId = useId()
    return (
        <div className={styles.row}>
            <label
                className={styles.label}
                htmlFor={textId}
            >
                {label}
            </label>
            <input
                className={styles.input}
                type="text"
                id={textId}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default TextInputFild;