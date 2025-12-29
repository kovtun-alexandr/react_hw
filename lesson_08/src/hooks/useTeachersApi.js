import axios from 'axios'
import { useCallback, useEffect, useState } from "react"

const useTeachersApi = (url, { skip = false } = {}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (skip) return

        async function fetchTeachers() {
            setIsLoading(true)
            setError(null)
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTeachers()
    }, [url, skip])

    return {
        data,
        isLoading,
        error,
    }
}

export default useTeachersApi