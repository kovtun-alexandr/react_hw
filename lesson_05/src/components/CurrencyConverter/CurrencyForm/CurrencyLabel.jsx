function CurrencyLabel({ setAmount }) {
    function handleChange(e) {
        setAmount(Number(e.target.value))
    }
    return (
        <>
            <label>
                <input
                    type="number"
                    onChange={handleChange}
                    placeholder="Введіть сумму"
                />
            </label>
        </>
    );
}

export default CurrencyLabel;