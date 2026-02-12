import { selectAuthUser } from "@/features/auth";
import { getPagesObjectList } from "@/shared/config/routes/frontRoutes";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

export function MainMenu() {
    const user = useSelector(selectAuthUser)

    const allowedRouter = getPagesObjectList().filter(({ meta }) => {
        if (!meta.isInMenu) return false
        if (!meta.requireAuth) return true
        if (!user) return false
        if (!meta.roles) return true
        return meta?.roles.includes(user?.role)
    })
    return (
        <nav
            className="nav"
        >
            {allowedRouter.map(({ path, meta }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) => [
                        'text-lg font-medium rounded-lg transition-colors px-2', isActive
                            ? 'active'
                            : 'link'
                    ].join(' ')}
                >
                    {meta.title}
                </NavLink>
            ))}
        </nav>
    );
}