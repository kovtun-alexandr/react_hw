import { Link } from "react-router";
import DeleteButton from "../DeleteButton/DeleteButton";
import HotelList from "../Hotel/HotelList/HotelList";
import TravelList from "../Travel/TravelList/TravelList";
import TextInputFild from "../TextInputFild/TextInputFild";

function Orders({
    id,
    customer,
    trips,
    hotels,
    totalPrice,
    onDelate,
    onSave,
    nameValue,
    editLink,
    isEditing = false,
    readOnly = false,
    linkIcon,
    onChange,
    onDeleteTrip,
    onDeleteHotel,
    onDayChange,
    editMode
}) {
    return (
        <article className="customer-order">
            {!isEditing && <h2>Customer: {customer}</h2>
            }
            {isEditing &&
                <TextInputFild
                    label="Customer name"
                    name="customer"
                    value={nameValue}
                    onChange={onChange}
                />
            }
            <TravelList
                routes={trips}
                readOnly={readOnly}
                isEditing={isEditing}
                onDelete={onDeleteTrip}
                editMode={editMode}
            />
            <HotelList
                hotels={hotels}
                readOnly={readOnly}
                isEditing={isEditing}
                onDelete={onDeleteHotel}
                onDayChange={onDayChange}
                editMode={editMode}
            />
            <p className="total-price">Total price: <span>$ {totalPrice}</span></p>
            <div className="order-actions">
                <Link
                    className="btn btn-link"
                    to={editLink}
                >
                    {linkIcon}
                </Link>
                {isEditing
                    ? <button
                        onClick={onSave}
                    >
                        💾
                    </button>
                    : <DeleteButton
                        onClick={() => onDelate(id)}
                    />
                }
            </div>
        </article>
    );
}

export default Orders;