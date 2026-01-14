import HotelList from "@/components/Hotel/HotelList/HotelList";
import TravelList from "@/components/Travel/TravelList/TravelList";
import { HotelsContext } from "@/contexts/HotelsContext";
import { TravelRoutesContext } from "@/contexts/TravelRoutesContext";
import { hotelsActions } from "@/reducers/hotels/hotelsActions";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router";

function HotelManager() {
    const navigate = useNavigate()
    const { routesList } = useContext(TravelRoutesContext)
    const { hotelsList, dispatch } = useContext(HotelsContext)

    const selectedCities = useMemo(() => {
        return routesList.filter(route => route.selected).map(route => route.endRoute)
    }, [routesList])

    const seelectedTravels = routesList.filter(routs => routs.selected)

    const selectedHotels = hotelsList.filter(hotel => hotel.selected)

    const cartCount = seelectedTravels.length + selectedHotels.length

    const onSelectHotel = (id) => {
        dispatch({
            type: hotelsActions.TOGGLE_SELECTED,
            payload: { id }
        })
    }
    return (
        <section>
            <div className="container flx col g-15">
                <h1>Hotels</h1>
                <TravelList
                    routes={routesList}
                    readOnly={true}
                />
                <HotelList
                    hotels={hotelsList}
                    selectedCities={selectedCities}
                    onSelect={onSelectHotel}
                />
                <div className="buttons">
                    <button
                        onClick={() => navigate('/travels')}
                    >Back</button>
                    <button
                        disabled={selectedHotels.length === 0}
                        onClick={() => navigate('/cart')}
                    >Cart {cartCount}</button>
                </div>
            </div>
        </section>
    );
}

export default HotelManager;