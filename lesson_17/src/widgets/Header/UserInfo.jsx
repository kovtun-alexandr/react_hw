import { selectAuthUser } from "@/features/auth";
import { LoginButton } from "@/features/auth";
import { LogoutButton } from "@/features/auth";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useSelector } from "react-redux";

export function UserInfo() {
    const user = useSelector(selectAuthUser)

    if (!user) {
        return <LoginButton
            to={frontRoutes.pages.login.navsgationPath}
        />
    }
    return (
        <div className="wrap">
            <div className="avatar">
                {user.email.charAt(0).toUpperCase()}
            </div>
            <span className="text text-cyan">
                {user.role}
            </span>
            <LogoutButton
                navigatePath={frontRoutes.pages.login.navsgationPath}
            />
        </div>
    );
}