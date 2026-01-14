import TravelCard from '@/components/Travel/TravelCard/TravelCard'

function TravelList({
    routes = [],
    readOnly = false,
    onSelect,
    isEditing = false,
    onDelete,
    onNext,
    editMode
}) {
    const displayedRoutes = readOnly
        ? routes.filter(route => route.selected)
        : routes

    const selectedRoutes = routes.filter(route => route.selected);

    return (
        <>
            {!readOnly ? <h2>Routes List</h2> : <h2>Selected trips</h2>}
            {!readOnly && onNext && selectedRoutes.length > 0 && (
                <button
                    className='btn-large'
                    onClick={onNext}
                >
                    {`You have selected ${selectedRoutes.length} destinations. Choose hotels`}
                </button>
            )}
            <ul className='travel-list'>
                {displayedRoutes.map((route) =>
                    <TravelCard key={route.id}
                        {...route}
                        onDelete={onDelete}
                        isSelected={route.selected}
                        onSelect={onSelect && (() => onSelect(route.id))}
                        readOnly={readOnly}
                        isEditing={isEditing}
                        editMode={editMode}
                    />
                )}
            </ul>
        </>
    );
}

export default TravelList;