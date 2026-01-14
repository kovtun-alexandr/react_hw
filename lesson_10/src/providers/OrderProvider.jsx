import { OrdersContext } from "@/contexts/OrdersContext";
import { ordersActions } from "@/reducers/orders/ordersActions";
import { ordersReducer } from "@/reducers/orders/ordersReducer";
import { useEffect, useReducer } from "react";

function OrderProvider({ children }) {
    const [orders, dispatch] = useReducer(ordersReducer, [])

    useEffect(() => {
        const stored = localStorage.getItem("orders")
        if (stored) {
            dispatch({
                type: ordersActions.LOAD,
                payload: JSON.parse(stored)
            })
        }
    }, [])
    return (
        <OrdersContext value={{ orders, dispatch }}>
            {children}
        </OrdersContext>
    );
}

export default OrderProvider;