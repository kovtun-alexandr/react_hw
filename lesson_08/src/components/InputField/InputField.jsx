import { useId } from 'react';
import styles from './InputField.module.css'

function InputField({ label, name, value, onChange, placeholder }) {
    const fieldId = useId()
    return (
        <div className={styles.row}>
            <label
                htmlFor={fieldId}
                className={styles.label}
            >
                {label}
            </label>
            <input
                type="text"
                id={fieldId}
                name={name}
                value={value}
                onChange={onChange}
                className={styles.input}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputField;