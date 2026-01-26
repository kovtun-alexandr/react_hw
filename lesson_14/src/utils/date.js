export const toDateTimeLocal = (value) => {
    if (!value) return ''

    const date = new Date(value)

    const pad = (n) => String(n).padStart(2, '0')

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
}

export const fromDateTimeLocal = (value) => {
    if (!value) return ''

    return new Date(value).toISOString()
}