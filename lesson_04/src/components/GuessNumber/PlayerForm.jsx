import { useState } from "react";

function PlayerForm({ playerId, checkNumber, answers, isActive }) {
    const [number, setNumber] = useState('')

    // console.log(playerId)

    function handleChange(e) {
        setNumber(e.target.value)
    }

    const isTooLong = number.length > 1
    const isAlreadyUsed = answers.includes(Number(number))

    function handleAddNumber(e) {
        e.preventDefault()
        if (isTooLong || isAlreadyUsed || number === '' || !isActive) return;
        checkNumber(Number(number), playerId)
        setNumber('')
    }

    return (
        <form action="#">
            <label className="player__label">
                <span>Number:</span>
                <input
                    className="player__input"
                    type="number"
                    name="number"
                    value={number}
                    disabled={!isActive}
                    onChange={handleChange}
                    placeholder="0-9"
                    maxLength="1"
                    min="0"
                    max="9"

                />
            </label>
            {isTooLong && <p>Number must be **single digit**</p>}
            {isAlreadyUsed && <p>This number has already been used.</p>}
            <button
                className="player__btn"
                disabled={isTooLong || isAlreadyUsed || number === ''}
                onClick={handleAddNumber}
            >
                Make a step
            </button>
        </form>
    );
}

export default PlayerForm;