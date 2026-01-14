import Orders from "@/components/Orders/Orders";
import { OrdersContext } from "@/contexts/OrdersContext";
import hotels from "@/data/hotels";
import useForm from "@/hooks/useForm";
import { ordersActions } from "@/reducers/orders/ordersActions";
import { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router";

function AdminEdit() {
    const { orders, dispatch } = useContext(OrdersContext)

    const { id } = useParams()
    const navigate = useNavigate()

    const order = orders.find(o => o.id === Number(id));

    const { value, handleChange, setValue } = useForm(order ?? {})

    function onSave() {
        dispatch({
            type: ordersActions.EDIT,
            payload: {
                id: order.id,
                data: {
                    ...value,
                    totalPrice: totalPrice
                }
            }
        })
        navigate('/admin/orders')
    }

    function handleDeleteTrip(tripId) {
        setValue(prev => ({
            ...prev,
            trips: prev.trips.filter(trip => trip.id !== tripId)
        }));
    }

    function handleDeleteHotel(hotelId) {
        setValue(prev => ({
            ...prev,
            hotels: prev.hotels.filter(hotel => hotel.id !== hotelId)
        }));
    }

    function handleDayChange(hotelId, delta) {
        setValue(prev => ({
            ...prev,
            hotels: prev.hotels.map(hotel => hotel.id === hotelId ? { ...hotel, day: Math.max(1, hotel.day + delta) } : hotel
            )
        }))
    }

    function calcOrderTotal(trips = [], hotels = []) {
        const tripsTotal = trips.reduce(
            (sum, trip) => sum + trip.price[0][trip.selectedTransport],
            0
        );

        const hotelsTotal = hotels.reduce(
            (sum, hotel) => sum + hotel.price * hotel.day,
            0
        );

        return tripsTotal + hotelsTotal;
    }

    const totalPrice = useMemo(() => {
        return calcOrderTotal(value.trips, value.hotels);
    }, [value.trips, value.hotels]);
    return (
        <section className="edit">
            <h1>Order Edit</h1>
            <Orders
                {...value}
                isEdit
                editLink="/admin/orders"
                linkIcon="⬅️"
                onChange={handleChange}
                nameValue={value.customer}
                onDeleteTrip={handleDeleteTrip}
                onDeleteHotel={handleDeleteHotel}
                onDayChange={handleDayChange}
                onSave={onSave}
                isEditing={true}
                readOnly={true}
                totalPrice={totalPrice}
                editMode="order"
            />
        </section>
    );
}

export default AdminEdit;