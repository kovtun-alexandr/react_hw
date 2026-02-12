import { useDispatch } from "react-redux";
import { useRefreshMutation } from "../../api/authApi";
import { logout, tokenRefreshed } from "../../api/authSlice";

export function useRefreshToken() {
    const [refreshMutation] = useRefreshMutation()
    const dispatch = useDispatch()

    async function refresh() {
        try {
            const result = await refreshMutation()
            if (result.data) {
                dispatch(tokenRefreshed(result.data))
                return true
            }
        } catch {
            dispatch(logout())
            return false
        }
    }

    return { refresh }
}