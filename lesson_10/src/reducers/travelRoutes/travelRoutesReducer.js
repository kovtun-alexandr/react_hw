import { travelRoutesActions } from "./travelRoutesActions";

export const travelRoutesReducer = (currentRoutesList, action) => {
    switch (action.type) {
        case travelRoutesActions.TOGGLE_SELECTED:
            return currentRoutesList.map((route) =>
                route.id === action.payload.id
                    ? { ...route, selected: !route.selected }
                    : route
            )
        case travelRoutesActions.SET_TRANSPORT:
            return currentRoutesList.map((route) =>
                route.id === action.payload.id
                    ? {
                        ...route,
                        selectedTransport: action.payload.transport
                    }
                    : route
            )
        case travelRoutesActions.RESET_SELECTS:
            return currentRoutesList.map((route) => ({
                ...route,
                selected: false,
                selectedTransport: 'bus',
            }))
        default:
            return currentRoutesList
    }
}