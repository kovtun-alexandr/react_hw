export function TextareField({
    name,
    value,
    onChange,
    rows,
    placeholder
}) {
    return (
        <textarea
            className="textarea"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
        />
    );
}