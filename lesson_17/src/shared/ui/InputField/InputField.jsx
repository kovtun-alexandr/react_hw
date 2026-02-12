import { useId } from "react";

export function InputField({
    label,
    value,
    onChange,
    type = 'text',
    placeholder,
    error,
    ...props
}) {
    const fieldId = useId()
    return (
        <div className="row">
            {label && (
                <label
                    className="label"
                    form={fieldId}
                >
                    {label}
                </label>
            )}

            <input
                type={type}
                id={fieldId}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input"
                {...props}
            />

            {error && (
                <span className="text-xs text-[var(--cp-neon-pink)]">
                    {error}
                </span>
            )}
        </div>
    );
}