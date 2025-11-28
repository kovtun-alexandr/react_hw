import { useState } from "react";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import users from "../../data/users";
import imgSmail from '../../../../public/smile.svg'

function Authorization() {
    // Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
    // 1) якщо логін = Іван – колір повідомлення про помилку синій
    // 2) якщо хтось інший, то колір повідомлення червоний

    const [data, setData] = useState(
        {
            login: '',
            password: ''
        }
    )

    return (
        <div className="task__sign">
            <h3>Sign in</h3>
            <LoginForm data={data} setData={setData} />
        </div>
    );
}

function LoginForm({ data, setData }) {
    const [messageError, setMessageError] = useState('')
    const [textColor, setTextColor] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);

    function inputChange(e) {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    function checkAutoresection(e) {
        e.preventDefault()

        if (data.login.toLocaleLowerCase() === 'ivan') {
            setTextColor('blue')
        } else {
            setTextColor('red')
        }

        const user = users.find(u => u.login === data.login.toLocaleLowerCase())

        if (!user) {
            setMessageError("Такого користувача не існує!")
            setData(prev => ({ ...prev, password: "" }))
            setLoggedIn(false)
            return false
        }

        if (data.password !== user.password) {
            setMessageError("Невірний пароль!")
            setData(prev => ({ ...prev, password: "" }))
            setLoggedIn(false)
            return false
        }

        setMessageError('')
        setLoggedIn(true)
        return true
    }

    return (
        <form action="#">
            <MyInput
                label="Login:"
                type="text"
                name="login"
                id="login"
                value={data.login}
                onChange={inputChange}
                placeholder="Login"
            />
            <MyInput
                label="Password:"
                type="password"
                name="password"
                id="passs"
                value={data.password}
                onChange={inputChange}
                placeholder="Password"
            />
            {messageError && <span style={{ color: textColor }} >{messageError}</span>}
            <MyButton onClick={checkAutoresection} text="Go" />
            {loggedIn && (
                <img style={{ width: '200px' }} src={imgSmail} alt="smile" />
            )}
        </form>
    );
}

export default Authorization;