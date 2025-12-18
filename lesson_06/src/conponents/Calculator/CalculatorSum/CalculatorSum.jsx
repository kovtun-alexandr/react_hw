import { memo } from "react";

function CalculateSum({ numFirst, numSecond, result }) {
    console.log("Render Sum")
    return (
        <>
            <div className="calculate__sum">
                <h3>Result:</h3>
                <div>
                    <span>{numFirst}</span>
                    <span>+</span>
                    <span>{numSecond}</span>
                    <span>=</span>
                    <span>{result}</span>
                </div>
            </div>
        </>
    );
}

export default memo(CalculateSum);