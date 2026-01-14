import { useEffect, useState } from "react";

export default function useForm(initialValue) {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue((perv) => ({ ...perv, [name]: value }))
    }

    return {
        value,
        handleChange,
        setValue,
    }
}