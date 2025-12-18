import { useCallback, useState } from "react";
import CalculatorForm from "./CalculatorForm/CalculatorForm";
import CalculateSum from "./CalculatorSum/CalculatorSum";

function CalculatorManager() {
    const [result, setResult] = useState(0)
    const [operandFirst, setOperandFirst] = useState(null)
    const [operandSecond, setOperandSecond] = useState(null)
    const [count, setCount] = useState(0)

    console.log("Render Manager")

    const calculateSum = useCallback((numFirst, numSecond) => {
        console.log("Render Calculate")
        setResult(numFirst + numSecond)
        setOperandFirst(numFirst)
        setOperandSecond(numSecond)
    }, [])

    function handleCounter() {
        setCount(prev => prev + 1)
    }

    return (
        <section className="calculator">
            <h2>Calculator</h2>
            <div className="calculator__wrap">
                <CalculatorForm calculateSum={calculateSum} />
                {!!result && (
                    <CalculateSum
                        numFirst={operandFirst}
                        numSecond={operandSecond}
                        result={result}
                    />
                )}
                <button onClick={handleCounter}>Count {count}</button>

            </div>
        </section>
    );
}

export default CalculatorManager;