import { useEffect, useState } from "react";
import NumberList from "./NumberList";
import PlayerList from "./PlayerList";
import AnswerList from "./AnswerList";
import Modal from "../Modal/Modal";

const randomNum = (max) => Math.floor(Math.random() * max)
const players = [
    {
        id: 1,
        name: "Player 1"
    },
    {
        id: 2,
        name: "Player 2"
    }
]

function GuessNumber() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isActive, setIsActive] = useState(true)
    const [answers, setAnswers] = useState([])
    const [loser, setLoser] = useState('')
    const [numList, setNumList] = useState(() => Array.from({ length: 3 }, () => ({
        value: randomNum(10),
        isVisible: false
    })))

    const checkNumber = (num, playerId) => {
        setAnswers(prev => [
            ...prev, num
        ])

        setNumList(prev => {
            const updated = prev.map(item => item.value === num ? { ...item, isVisible: true } : item)

            const allVisible = updated.every(item => item.isVisible)

            if (allVisible) {
                setLoser(playerId)
                setIsModalOpen(true)
            }
            return updated
        })

        setIsActive(prev => !prev)
    }

    const resetGame = () => {
        setLoser(null)
        setIsModalOpen(false)
        setAnswers([])
        setNumList(Array.from({ length: 3 }, () => ({
            value: randomNum(10),
            isVisible: false
        })))
        setIsActive(true)
    }

    return (
        <div className="guessNumber">
            <h2>Guess the number</h2>
            <NumberList numList={numList} />
            <PlayerList
                players={players}
                checkNumber={checkNumber}
                answers={answers}
                isActive={isActive}
            />
            <AnswerList answers={answers} />
            <Modal
                isOpen={isModalOpen}
                onClose={resetGame}
                loserName={players.find(p => p.id === loser)?.name}
            />
        </div>
    )
}

export default GuessNumber;