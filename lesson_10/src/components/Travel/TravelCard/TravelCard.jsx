import DeleteButton from "@/components/DeleteButton/DeleteButton";
import TravelPriceSelector from "../TravelPriceSelector/TravelPriceSelector";
import styles from './TravelCard.module.css'
function TravelItem({
    isSelected,
    id,
    onSelect,
    startRoute,
    distance,
    endRoute,
    price,
    onDelete,
    isEditing,
    readOnly,
    editMode
}) {
    return (
        <li
            className={[!!editMode ? styles.inLine : '', styles.route].join(' ')}
        >
            {isEditing &&
                <DeleteButton onClick={() => onDelete(id)} />
            }
            <div className={styles.way}>
                <div>{startRoute}</div>
                <div>{distance} km</div>
                <div>{endRoute}</div>
            </div>
            <TravelPriceSelector
                id={id}
                readOnly={readOnly}
                name={`${startRoute}-${endRoute}`}
                price={price}
                styles={styles}
            />
            {!readOnly && (
                <button
                    className="add-button"
                    onClick={() => onSelect(id)}
                >
                    {!isSelected ? 'Add a trip' : 'Selected'}
                </button>
            )}
        </li>
    );
}

export default TravelItem;