import { useLoginMutation } from "../../api/authApi";

export function useLogin() {
    const [loginMutation, { isLoading, error }] = useLoginMutation()

    async function login(credentials) {
        return await loginMutation(credentials).unwrap()
    }

    return { login, isLoading, error }
}