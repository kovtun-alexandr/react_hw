import HotelList from "@/components/Hotel/HotelList/HotelList";
import TravelList from "@/components/Travel/TravelList/TravelList";
import CartForm from "./CartForm/CartForm";
import { useContext, useMemo } from "react";
import { TravelRoutesContext } from "@/contexts/TravelRoutesContext";
import { HotelsContext } from "@/contexts/HotelsContext";
import { hotelsActions } from "@/reducers/hotels/hotelsActions";
import { travelRoutesActions } from "@/reducers/travelRoutes/travelRoutesActions";

function CartManager() {
    const { routesList, dispatch: routesDispatch } = useContext(TravelRoutesContext)
    const { hotelsList, dispatch: hotelsDispatch } = useContext(HotelsContext)

    const selectedRoutes = routesList.filter(r => r.selected)
    const selectedHotels = hotelsList.filter(h => h.selected)

    const itemsCount =
        selectedRoutes.length + selectedHotels.length

    const tripsTotal = selectedRoutes.reduce((sum, r) => sum + r.price[0][r.selectedTransport], 0)

    const hotelsTotal = useMemo(() => {
        return selectedHotels.reduce((sum, h) => sum + h.price * h.day, 0)
    }, [selectedHotels])

    const totalSum = tripsTotal + hotelsTotal

    const handleOrder = (userData) => {
        const order = {
            customer: `${userData.firstName} ${userData.lastName}`,
            trips: selectedRoutes,
            hotels: selectedHotels,
            totalPrice: totalSum,
            id: Date.now()
        }

        const orders = JSON.parse(localStorage.getItem('orders')) || []
        localStorage.setItem('orders', JSON.stringify([...orders, order]))
    }

    function onDeleteRoute(id) {
        routesDispatch({ type: travelRoutesActions.TOGGLE_SELECTED, payload: { id } })
    }

    function onDeleteHotel(id) {
        hotelsDispatch({ type: hotelsActions.DELETE_FROM_CART, payload: { id } })
    }


    function resets() {
        routesDispatch({ type: travelRoutesActions.RESET_SELECTS })
        hotelsDispatch({ type: hotelsActions.UNSELECT_ALL })
    }

    return (
        <section className="cart">
            <div className="container flx col g-15">
                <h1>Cart</h1>
                <TravelList
                    routes={routesList}
                    readOnly={true}
                    isEditing={true}
                    onDelete={onDeleteRoute}
                    editMode="cart"
                />
                <HotelList
                    isEditing={true}
                    hotels={hotelsList}
                    readOnly={true}
                    onDelete={onDeleteHotel}
                    editMode="cart"
                />
                <CartForm
                    count={itemsCount}
                    totalSum={totalSum}
                    onSubmit={handleOrder}
                    onResets={resets}
                />
            </div>
        </section>
    );
}

export default CartManager;