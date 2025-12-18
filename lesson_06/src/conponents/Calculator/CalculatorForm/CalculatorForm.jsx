import { memo, useRef } from "react";
import NumericField from "./NumericField";

function CalculatorForm({ calculateSum }) {
    const firstRef = useRef(null)
    const secondRef = useRef(null)

    console.log("Render Form")

    function handleClick(e) {
        e.preventDefault()

        const firstValue = firstRef.current.value
        const secondValue = secondRef.current.value

        if (firstValue === '' || secondValue === '') return

        calculateSum(Number(firstValue), Number(secondValue))

        firstRef.current.value = ''
        secondRef.current.value = ''
    }
    return (
        <form className="calculator__form" action="#">
            <NumericField text="Operand 1" ref={firstRef} />
            <NumericField text="Operand 2" ref={secondRef} />
            <button type="submit" onClick={handleClick}>Calculate</button>
        </form>
    );
}

export default memo(CalculatorForm);