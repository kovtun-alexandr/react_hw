import { forwardRef, useId } from "react";

const NumericField = forwardRef(({ text }, ref) => {
    const inputId = useId()

    console.log("Render Numeric")

    return (
        <div className="calculator__row">
            <label className="calculator__label" htmlFor={inputId}>{text}</label>
            <input className="calculator__input" type="number" id={inputId} ref={ref} />
        </div>
    );
})

export default NumericField;