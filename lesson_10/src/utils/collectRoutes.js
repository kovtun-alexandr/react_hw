export function collectRoutes(routes, menu, role, parentPath = '') {
    let result = []

    for (const route of routes) {
        const handle = route.handle

        if (handle?.menus?.includes(menu) && (!handle.roles || handle.roles.includes(role))) {
            result.push({
                ...route,
            })
        }

        if (route.children) {
            result = result.concat(
                collectRoutes(route.children, menu, role, parentPath)
            )
        }
    }

    return result
}