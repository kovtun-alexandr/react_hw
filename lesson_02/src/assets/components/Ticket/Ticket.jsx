import { useState } from "react";
import MyInput from "../MyInput";
import "./Ticket.scss"

function Ticket() {
    // З випадаючого списку вибираємо клас квитка у літаку. Якщо:
    // 1) бізнес - виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают
    // 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.

    const [selected, setSelected] = useState("");
    const [ticket, setTicket] = useState({
        class: "",
        newspaper: false,
        cognac: false,
        snack: "no",
        beer: false,
        chips: false
    });

    const business = ticket.class === "business" ? "business" : ""
    const econom = ticket.class === "econom" ? "econom" : ""

    const options = [
        { id: '1', label: "Select a plane ticket class", value: "", disabled: true },
        { id: '2', label: "Business class", value: "business" },
        { id: '3', label: "Economy class", value: "econom" }
    ];

    function handleSelect(e) {
        const value = e.target.value

        if (value === 'business') {
            setSelected(value)
            setTicket({
                class: 'business',
                newspaper: false,
                cognac: false,
                snack: 'no',
                beer: false,
                chips: false
            });
        } else if (value === 'econom') {
            setSelected(value)
            setTicket({
                class: 'econom',
                newspaper: false,
                cognac: false,
                snack: 'no',
                beer: false,
                chips: false
            });
        } else {
            setTicket({
                class: '',
                newspaper: false,
                cognac: false,
                snack: 'no',
                beer: false,
                chips: false
            });
        }
    }

    function handleCognac(e) {
        setTicket((perv) => ({
            ...perv,
            cognac: e.target.checked
        }))
    }

    function handleSnack(e) {
        setTicket((prev) => ({
            ...prev,
            snack: e.target.value
        }))
    }

    return (
        <>
            <h3>Choose an option</h3>
            <div className={`ticket ${business} ${econom}`}>
                <select
                    id="simple-select"
                    value={selected}
                    onChange={handleSelect}
                >
                    {options.map((opt) => (
                        <option key={opt.id} value={opt.value} disabled={opt.disabled}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {ticket.class === 'business' &&
                    <div className="checkbox">
                        <MyInput
                            label="Newspaper"
                            type="checkbox"
                            name="newspaper"
                            id="newspaper"
                            onChange={(e) =>
                                setTicket(prev => ({ ...prev, newspaper: e.target.checked }))
                            }
                        />
                        <MyInput
                            label="Cognac"
                            type="checkbox"
                            name="cognac"
                            id="cognac"
                            checked={ticket.cognac}
                            onChange={handleCognac}
                        />
                        {ticket.cognac &&
                            <div className="checkbox">
                                <span className="checkbox__title">Snack</span>
                                <MyInput
                                    label="No"
                                    type="radio"
                                    id="snack"
                                    name="snack"
                                    value="no"
                                    checked={ticket.snack === "no"}
                                    onChange={handleSnack}
                                />
                                <MyInput
                                    label="Yes"
                                    type="radio"
                                    id="snack"
                                    name="snack"
                                    value="yes"
                                    checked={ticket.snack === "yes"}
                                    onChange={handleSnack}
                                />
                            </div>
                        }
                    </div>
                }
                {ticket.class === 'econom' &&
                    <div className="checkbox">
                        <MyInput
                            label="Beer"
                            type="checkbox"
                            id="beer"
                            onChange={(e) =>
                                setTicket(prev => ({ ...prev, beer: e.target.checked }))
                            }
                        />
                        <MyInput
                            label="Chips"
                            type="checkbox"
                            id="Chips"
                            onChange={(e) =>
                                setTicket(prev => ({ ...prev, chips: e.target.checked }))
                            }
                        />
                    </div>
                }
            </div >
        </>
    );
}

export default Ticket;