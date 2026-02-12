import { useState } from "react"
import { useDeleteUserMutation } from "../api/userApi"

export const useDeleteUser = () => {
    const [isDeleting, setIsDeleting] = useState(false)
    const [deleteUser, { error }] = useDeleteUserMutation()

    const onDelete = async (id) => {
        setIsDeleting(true)
        try {
            await deleteUser(id).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return {
        onDelete,
        isDeleting,
        error
    }
}