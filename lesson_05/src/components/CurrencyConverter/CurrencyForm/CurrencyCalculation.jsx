import CurrencySelector from "./CurrencySelector";

function CurrencyCalculation({
    currencies,
    result,
    rateUah,
    rateCurrensy,
    setRateCurrensy
}) {
    return (
        <div className="currency__item">
            <CurrencySelector
                currencies={currencies}
                setRate={setRateCurrensy}
            />
            <div className="currency__result">
                <h4>Прорахунок: </h4>
                {rateCurrensy !== null && rateUah !== null
                    ? <span>{result.toFixed(2)}</span>
                    : <span>Ви не вибрали валюту</span>
                }
            </div>
        </div>
    );
}

export default CurrencyCalculation;