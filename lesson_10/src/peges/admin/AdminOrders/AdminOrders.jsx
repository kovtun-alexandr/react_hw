import Orders from "@/components/Orders/Orders";
import { OrdersContext } from "@/contexts/OrdersContext";
import { ordersActions } from "@/reducers/orders/ordersActions";
import { useContext } from "react";

function AdminOrders() {
    const { orders, dispatch } = useContext(OrdersContext)

    function handleDelete(id) {
        dispatch({ type: ordersActions.DELETE, payload: { id } })
    }
    return (
        <section className="order">
            <h1>Orders</h1>
            {orders.map((order) =>
                <Orders
                    key={order.id}
                    {...order}
                    onDelate={handleDelete}
                    editLink={`/admin/orders/${order.id}`}
                    linkIcon="✏️"
                    isEditing={false}
                    readOnly={true}
                    editMode="order"
                />
            )}
        </section>
    );
}

export default AdminOrders;