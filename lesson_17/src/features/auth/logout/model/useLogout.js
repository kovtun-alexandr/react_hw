import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../api/authApi";

export function useLogout() {
    const [logoutMutation] = useLogoutMutation()
    const dispatch = useDispatch()

    const logoutUser = async () => {
        try {
            await logoutMutation().unwrap()
        } catch {
            dispatch(logout())
        }
    }

    return { logoutUser }
}