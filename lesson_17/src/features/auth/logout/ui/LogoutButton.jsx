import { useNavigate } from "react-router"
import { useLogout } from "../model/useLogout"

export function LogoutButton({ navigatePath = '/' }) {
    const { logoutUser } = useLogout()
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutUser()
        navigate(navigatePath)
    }
    return (
        <button
            onClick={handleLogout}
            className="btn-login"
        >
            Вийти
        </button>
    )
}