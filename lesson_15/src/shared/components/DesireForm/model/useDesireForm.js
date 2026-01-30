import { useState } from 'react'
import { formatDateForInput } from './formatDateForInput'

export function useDesireForm(
    initialValues = { title: '', date: '', friendName: '' },
    onSubmit,
) {
    const [values, setValues] = useState(() => ({
        ...initialValues,
        date: formatDateForInput(initialValues?.date)
    }))
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validate = (vals) => {
        const errs = {}
        if (!vals.title.trim()) errs.title = 'Enter your desire'
        if (!vals.date) errs.date = 'Choose a date'
        if (!vals.friendName.trim()) errs.friend = 'Enter your friend'
        return errs
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validate(values)
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true)
            try {
                const preparedValues = {
                    ...values,
                    date: new Date(values.date).toISOString(),
                }
                await onSubmit(preparedValues)
                setValues({ ...initialValues })
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        setValues,
        setErrors,
    }
}