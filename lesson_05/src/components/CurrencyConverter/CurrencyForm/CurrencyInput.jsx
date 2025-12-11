import CurrencyLabel from "./CurrencyLabel";
import CurrencySelector from "./CurrencySelector";

function CurrencyInput({ currencyUah, setAmount, setRateUah }) {

    return (
        <div className="currency__item">
            <CurrencySelector
                currencies={currencyUah}
                setRate={setRateUah}
            />
            <CurrencyLabel setAmount={setAmount} />
        </div>
    );
}

export default CurrencyInput;