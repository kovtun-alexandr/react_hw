import { useEffect, useState } from "react";
import CurrencyForm from "./CurrencyForm/CurrencyForm";

function CurrencyManager({ currencyUah }) {
    const [currencies, setCurrencies] = useState(() => [])
    const [amount, setAmount] = useState(0)
    const [rateUah, setRateUah] = useState(null)
    const [rateCurrensy, setRateCurrensy] = useState(null)
    const result = amount > 0 && rateCurrensy !== null ? amount / rateCurrensy : 0

    useEffect(() => {
        async function loadCurrency() {
            try {
                const response = await fetch(
                    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
                )
                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.status}`)
                }
                const data = await response.json()
                const normolize = data.map(item => ({
                    code: item.cc,
                    name: item.txt,
                    rate: item.rate
                }))
                setCurrencies(normolize)
            } catch (error) {
                console.error('Error loading currencies:', error)
            }
        }
        loadCurrency()
    }, [])

    return (
        <div className="currency">
            <h2>Конвертер валют</h2>
            <CurrencyForm
                currencies={currencies}
                currencyUah={currencyUah}
                result={result}
                setAmount={setAmount}
                setRateUah={setRateUah}
                setRateCurrensy={setRateCurrensy}
                rateCurrensy={rateCurrensy}
                rateUah={rateUah}
            />
        </div>
    );
}

export default CurrencyManager;