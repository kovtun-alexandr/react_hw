import { ordersActions } from "./ordersActions";

export const ordersReducer = (currentOrdersList, action) => {
    switch (action.type) {
        case ordersActions.LOAD:
            return action.payload
        case ordersActions.DELETE:
            const filtered = currentOrdersList.filter(order =>
                order.id !== action.payload.id)
            localStorage.setItem('orders', JSON.stringify(filtered))
            return filtered
        case ordersActions.EDIT:
            const updated = currentOrdersList.map(order =>
                order.id === action.payload.id
                    ? { ...order, ...action.payload.data }
                    : order
            )
            localStorage.setItem('orders', JSON.stringify(updated))
            return updated
        default:
            return currentOrdersList
    }
}