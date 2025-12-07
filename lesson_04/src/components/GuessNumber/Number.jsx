function Number({ value, isVisible }) {
    return (
        <div>
            {isVisible ? (<div>{value}</div>) : (<div>?</div>)}
        </div>
    );
}

export default Number;