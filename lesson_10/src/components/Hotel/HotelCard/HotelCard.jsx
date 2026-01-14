import DeleteButton from "@/components/DeleteButton/DeleteButton";
import { HotelsContext } from "@/contexts/HotelsContext";
import { hotelsActions } from "@/reducers/hotels/hotelsActions";
import { useContext } from "react";
import styles from './HotelCard.module.css'

function HotelCard({
    id,
    img,
    city,
    name,
    description,
    price,
    day,
    onSelect,
    isSelected,
    isEditing,
    readOnly,
    onDelete,
    onDayChange,
    editMode
}) {
    const { dispatch } = useContext(HotelsContext)

    const handleDecrementDay = () => {
        if (editMode === "order" && onDayChange) {
            onDayChange(id, -1)
        } else if (editMode === "cart") {
            dispatch({ type: hotelsActions.DECREMENT_DAY, payload: { id } })
        }
    }

    const handleIncrenentDay = () => {
        if (editMode === "order" && onDayChange) {
            onDayChange(id, +1)
        } else if (editMode === "cart") {
            dispatch({ type: hotelsActions.INCREMENT_DAY, payload: { id } })
        }
    }

    const totalPrice = price * day
    return (
        <li
            className={[!!editMode ? styles.inLine : '', styles['hotel-card']].join(' ')}
        >
            {isEditing &&
                <DeleteButton onClick={() => onDelete(id)} />
            }
            <div className={styles.img}>
                <img src={img} alt={`Photo hotel ${name}`} />
            </div>
            <div className={styles.body}>
                <div className={styles.city}>City: <span>{city}</span></div>
                <div className={styles.title}>{name}</div>
                <div className={styles.descr}>{description}</div>
                <div className={styles.price}>Room price per day: <span>${price}</span></div>
                {isEditing && (
                    <div className={styles["day-inner"]}>
                        <div className={styles["day-counrer"]}>
                            <button
                                className={styles.btn}
                                onClick={handleDecrementDay}
                            >
                                -
                            </button>
                            {day}
                            <button
                                className={styles.btn}
                                onClick={handleIncrenentDay}
                            >
                                +
                            </button>
                        </div>
                        <div className={styles["day-tottal"]}>
                            Total: $ {totalPrice}
                        </div>
                    </div>
                )
                }
            </div >
            {!readOnly && (
                <button
                    onClick={() => onSelect(id)}
                >
                    {!isSelected ? 'Add a hotel' : 'Selected'}
                </button>

            )}
        </li >
    );
}

export default HotelCard;