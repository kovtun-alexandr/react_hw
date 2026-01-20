import { routes } from "@/routes/routes";
import { useMemo } from "react";
import { useSelector } from "react-redux";


export function useMenuRoutes(menu) {
    const role = useSelector(state => state.user.role)

    return useMemo(() => {
        if (!role) return []
        return routes[0].children.filter((route) => route.handle.menus.includes(menu))
    }, [menu, role])
}