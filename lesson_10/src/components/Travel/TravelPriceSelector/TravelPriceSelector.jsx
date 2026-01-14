import RadioInputFild from "@/components/RadioInputFild/RadioInputFild";
import { TravelRoutesContext } from "@/contexts/TravelRoutesContext";
import { travelRoutesActions } from "@/reducers/travelRoutes/travelRoutesActions"
import { useContext, useMemo } from "react";

function TravelPriceSelector({ id, name, price, readOnly, styles }) {
    const { routesList, dispatch } = useContext(TravelRoutesContext)

    const currentRoute = useMemo(() =>
        routesList.find(route => route.id === id)
        , [routesList, id])

    const selectedTransport = currentRoute?.selectedTransport;

    const handleChangeTransport = (id, transport) => {
        dispatch({
            type: travelRoutesActions.SET_TRANSPORT,
            payload: { id, transport }
        })
    }
    const currentPrice = useMemo(() => {
        return price[0][selectedTransport]
    }, [price, selectedTransport])
    return (
        <div className={styles.body}>
            {!readOnly ? (
                <>
                    <h3 className={styles.transport}>Choose transport:</h3>
                    <div className={styles.inner}>
                        {Object.keys(price[0]).map((transport) => (
                            <RadioInputFild
                                key={transport}
                                name={name}
                                value={transport}
                                checked={selectedTransport === transport}
                                onChange={() => handleChangeTransport(id, transport)}
                                price={price[0][transport]}
                                icon={transport}
                            />
                        ))}
                    </div>
                    <p className={styles.price}>Selected price: <span> ${currentPrice}</span></p>
                </>
            ) : <p className={styles.price}>Trip price: <span> ${currentPrice}</span> - {selectedTransport.toUpperCase()}</p>
            }
        </div>
    );
}

export default TravelPriceSelector;