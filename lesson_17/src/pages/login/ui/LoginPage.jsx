import { LoginForm } from "@/features/auth";

export default function LoginPage() {
    return (
        <section className="select-wrapper">
            <h1>Вхід у систуму</h1>
            <LoginForm />
        </section>
    );
}