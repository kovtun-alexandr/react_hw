import { useId } from "react";
import styles from './InputField.module.css'

function InputField({ label, type, name, placeholder, value, onChange }) {
    const inputId = useId()
    return (
        <div className={styles.row}>
            <label
                htmlFor={inputId}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={inputId}
                value={value[name] || ''}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

export default InputField;