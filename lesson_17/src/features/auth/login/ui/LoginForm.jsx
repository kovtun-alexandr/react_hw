import { useState } from "react"
import { useNavigate } from "react-router"
import { useLogin } from "../model/useLogin"
import { frontRoutes } from "@/shared/config/routes/frontRoutes"
import { InputField } from "@/shared"

export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navsgate = useNavigate()

    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await login({ email, password })

        if (result.user) navsgate(frontRoutes.pages.home.navsgationPath)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="auth-form"
        >
            <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required

            />
            <InputField
                name="password"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
                type="submit"
                disabled={isLoading}
                className="btn-login"
            >
                {isLoading ? 'Завантаження...' : 'Увійти'}
            </button>
            {error && (
                <div className="text text-pink font-medium">
                    {error.data?.message || 'Помилка входу'}
                </div>
            )}
        </form>
    )
}