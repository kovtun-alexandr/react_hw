import CurrencyCalculation from "./CurrencyCalculation";
import CurrencyInput from "./CurrencyInput";

function CurrencyForm({
    currencyUah,
    currencies,
    result,
    setAmount,
    setRateUah,
    setRateCurrensy,
    rateCurrensy,
    rateUah
}) {

    return (
        <form action="#" className="currency__form">
            <CurrencyInput
                currencyUah={currencyUah}
                setAmount={setAmount}
                setRateUah={setRateUah}
            />
            <CurrencyCalculation
                currencies={currencies}
                result={result}
                rateUah={rateUah}
                rateCurrensy={rateCurrensy}
                setRateCurrensy={setRateCurrensy}
            />
        </form>
    );
}

export default CurrencyForm;