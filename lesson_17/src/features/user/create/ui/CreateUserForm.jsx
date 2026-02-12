import { roles } from "@/shared/config/roles";
import { useCreateUser } from "../model/useCreateUser";
import { InputField } from "@/shared/ui/InputField/InputField";
import { SelectField } from "@/shared/ui/SelectField/SelectField";

export function CreateUserForm() {
    const {
        name,
        email,
        password,
        role,
        setName,
        setEmail,
        setPassword,
        setRole,
        onSubmit,
        isLoading,
    } = useCreateUser()
    return (
        <form
            onSubmit={onSubmit}
            className="form-create-user"
        >
            <InputField
                label="Імʼя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Імʼя"
            />

            <InputField
                label="E-mail"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            />

            <InputField
                label="Пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
            />

            <SelectField
                label="Роль"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={[
                    { value: roles.admin, label: 'Адмін' },
                    { value: roles.manager, label: 'Менеджер' },
                    { value: roles.user, label: 'Користувач' },
                ]}
            />

            <button
                type="submit"
                className="btn-fit"
                disabled={isLoading}
            >
                Додати користувача
            </button>
        </form>
    );
}