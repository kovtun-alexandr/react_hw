import { useState } from 'react';
import words from '../../data/words'
import MyButton from '../MyButton';
import MyInput from '../MyInput';
import styles from './Translator.module.css'

function Translator() {
    //Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. 
    // Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента), 
    // якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку). 
    // ! Але я трішкі модернізував задачку. Якщо вірно – то в мене зявляеться наступне слово

    const [inputWord, setInputWord] = useState('')
    const [word, setWord] = useState(() => randomWord(words))
    const [messageError, setMessageError] = useState('')
    const [isError, setIsError] = useState(false)

    function randomWord(arr) {
        const index = Math.floor(Math.random() * arr.length)
        return arr[index]
    }

    function inputChange(e) {
        setInputWord(e.target.value)
    }

    function checkWorld() {
        if (inputWord.toLocaleLowerCase() === word.wordUa) {
            setWord(randomWord(words))
            setInputWord("")
            setMessageError("")
            setIsError(false)
        } else {
            setMessageError("Incorrect, try again.")
            setIsError(true)
            setInputWord("")
        }
    }

    return (
        <div className={styles.translator}>
            <h3>Translater</h3>
            <div className={`${styles.wrapper} ${isError ? styles.error : ''}`}>
                <img src={word.img} alt={word.wordEn} />
                <div className={styles.hint}>{word.wordEn}</div>
                <MyInput
                    className={styles.input}
                    label="Your translation:"
                    type="text"
                    name="word"
                    value={inputWord}
                    onChange={inputChange}
                    placeholder="Word ua"
                />
                {messageError && <span style={{ color: "red" }}>{messageError}</span>}
                <MyButton className={styles.button} onClick={checkWorld} text="Verify" />
            </div>
        </div>
    );
}

export default Translator;