import { useCreateUserMutation } from "@/entities/user/api/userApi"
import { roles } from "@/shared/config/roles"
import { useState } from "react"

export const useCreateUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState(roles.user)

    const [createUser, { isLoading, error }] = useCreateUserMutation()

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUser({
            name,
            email,
            password,
            role,
        }).unwrap()

        setName('')
        setEmail('')
        setPassword('')
        setRole(roles.user)
    }

    return {
        name,
        email,
        password,
        role,

        setName,
        setEmail,
        setPassword,
        setRole,

        onSubmit,
        isLoading,
        error,
    }
}