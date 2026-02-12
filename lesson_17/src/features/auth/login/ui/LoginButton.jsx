import { Link } from "react-router";

export function LoginButton({ to }) {
    return (
        <Link
            to={to}
            className="btn-login"
        >
            Увійти
        </Link>
    )
}