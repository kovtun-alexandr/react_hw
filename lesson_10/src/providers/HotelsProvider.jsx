import { HotelsContext } from "@/contexts/HotelsContext";
import { useReducer } from "react";
import hotels from '@/data/hotels';
import { hotelsReducer } from "@/reducers/hotels/hotelsReducers";

function HotelsProvider({ children }) {
    const [hotelsList, dispatch] = useReducer(hotelsReducer, hotels)
    return (
        <HotelsContext value={{ hotelsList, dispatch }}>
            {children}
        </HotelsContext>
    );
}

export default HotelsProvider;