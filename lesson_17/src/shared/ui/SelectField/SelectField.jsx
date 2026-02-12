export function SelectField({ label, value, onChange, options }) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}

            <select
                value={value}
                onChange={onChange}
                className="px-3 py-2 rounded-md bg-[var(--cp-bg-1)] border"
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}