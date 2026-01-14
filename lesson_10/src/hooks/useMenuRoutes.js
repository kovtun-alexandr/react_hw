import { UserContext } from "@/contexts/UserContext";
import { routes } from "@/router/router";
import { collectRoutes } from "@/utils/collectRoutes";
import { useContext, useMemo } from "react";

export function useMenuRoutes(menu) {
    const { user } = useContext(UserContext)

    return useMemo(() => {
        return collectRoutes(
            routes,
            menu,
            user.role
        )
    }, [menu, user.role])
}