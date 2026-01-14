import { TravelRoutesContext } from "@/contexts/TravelRoutesContext";
import travelRoutes from "@/data/travelRoutes";
import { travelRoutesReducer } from "@/reducers/travelRoutes/travelRoutesReducer";
import { useReducer } from "react";

function TravelRoutesProvider({ children }) {
    const [routesList, dispatch] = useReducer(travelRoutesReducer, travelRoutes)
    return (
        <TravelRoutesContext value={{ routesList, dispatch }}>
            {children}
        </TravelRoutesContext>
    );
}

export default TravelRoutesProvider;