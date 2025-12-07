import Number from "./Number";

function NumberList({ numList }) {
    return (
        <div className="number__list">
            <h3>Number:</h3>
            {numList ? (
                numList.map((el, index) => (
                    <div className="number__item" key={index}>
                        <Number {...el} />
                    </div>
                ))
            ) : (<div>The list is empty</div>)}
        </div>
    );
}

export default NumberList;