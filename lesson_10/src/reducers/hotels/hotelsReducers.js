import { hotelsActions } from "./hotelsActions";

export const hotelsReducer = (currentHotelsList, action) => {
    switch (action.type) {
        case hotelsActions.TOGGLE_SELECTED:
            return currentHotelsList.map((hotel) => hotel.id === action.payload.id
                ? { ...hotel, selected: !hotel.selected }
                : hotel
            )
        case hotelsActions.INCREMENT_DAY:
            return currentHotelsList.map((hotel) => hotel.id === action.payload.id
                ? { ...hotel, day: hotel.day + 1 }
                : hotel
            )
        case hotelsActions.DECREMENT_DAY:
            return currentHotelsList.map((hotel) => hotel.id === action.payload.id
                ? { ...hotel, day: Math.max(1, hotel.day - 1) }
                : hotel
            )
        case hotelsActions.DELETE_FROM_CART:
            return currentHotelsList.map((hotel) => hotel.id === action.payload.id
                ? { ...hotel, selected: false, day: 1 }
                : hotel
            )
        case hotelsActions.UNSELECT_ALL:
            return currentHotelsList.map((hotel) => ({
                ...hotel,
                selected: false,
                day: 1
            }))
        default:
            return currentHotelsList
    }
}