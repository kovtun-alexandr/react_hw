import { useState } from "react";

function CurrencySelector({ currencies, setRate }) {
    const [selectValue, setSelectValue] = useState('0')
    const [currencyCode, setCurrencyCode] = useState('')

    function handleSelectCurrency(e) {
        const value = e.target.value
        const currency = currencies.find(el => el.code === value)?.rate
        setRate(currency)
        setSelectValue(value)
        setCurrencyCode(value)
    }
    return (
        <>
            {currencies && currencies.length > 0 && (
                <>
                    <h3>Валюта: <span>{currencyCode}</span></h3>
                    <select
                        value={selectValue}
                        name="currency"
                        onChange={handleSelectCurrency}
                    >
                        <option
                            value="0"
                            disabled
                        >
                            Виберіть валюту
                        </option>
                        {currencies?.map((currency, index) => (
                            <option
                                key={index}
                                value={currency.code}
                            >
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </>
            )}
        </>
    );
}

export default CurrencySelector;