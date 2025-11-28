function MyInput({ label, className, type = "text", name, id, value, checked, onChange, placeholder }) {
    return (
        <label>
            <span>{label}</span>
            <input
                className={className}
                type={type}
                name={name}
                id={id}
                value={value}
                checked={checked}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    )
}

export default MyInput