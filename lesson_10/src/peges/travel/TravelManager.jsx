import TravelList from "@/components/Travel/TravelList/TravelList";
import { TravelRoutesContext } from "@/contexts/TravelRoutesContext";
import { travelRoutesActions } from "@/reducers/travelRoutes/travelRoutesActions";
import { useContext } from "react";
import { useNavigate } from "react-router";

function TravelManager() {
    const { routesList, dispatch } = useContext(TravelRoutesContext)
    const navigate = useNavigate()

    const onSelect = (id) => {
        dispatch({
            type: travelRoutesActions.TOGGLE_SELECTED,
            payload: { id }
        })
    }
    return (
        <section>
            <div className="container flx col g-15">
                <h1>Travels</h1>
                <TravelList
                    routes={routesList}
                    onSelect={onSelect}
                    onNext={() => navigate('/hotels')}
                />
            </div>
        </section>
    );
}

export default TravelManager;