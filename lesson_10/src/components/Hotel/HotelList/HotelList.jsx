import HotelCard from "@/components/Hotel/HotelCard/HotelCard";

function HotelList({
    hotels = [],
    selectedCities = [],
    readOnly = false,
    isEditing = false,
    onSelect,
    onDelete,
    onDayChange,
    editMode
}) {
    const filteredHotels = selectedCities.length
        ? hotels.filter(hotel => selectedCities.includes(hotel.city))
        : hotels


    const displayHotels = readOnly
        ? filteredHotels.filter(hotet => hotet.selected)
        : filteredHotels

    return (
        <>
            {!readOnly ? <h2>Hotels List</h2> : <h2>Selected Hotels</h2>}
            <ul className="hotel-list">
                {displayHotels.map((hotel) =>
                    <HotelCard
                        key={hotel.id}
                        {...hotel}
                        isEditing={isEditing}
                        isSelected={hotel.selected}
                        onSelect={!readOnly && onSelect && (() => onSelect(hotel.id))}
                        readOnly={readOnly}
                        onDelete={onDelete}
                        onDayChange={onDayChange}
                        editMode={editMode}
                    />
                )}
            </ul>
        </>
    );
}

export default HotelList;