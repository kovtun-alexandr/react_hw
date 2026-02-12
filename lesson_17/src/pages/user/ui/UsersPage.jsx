import { useCreateUserMutation } from "@/entities/user/api/userApi";
import { CreateUserForm } from "@/features/user/create/ui/CreateUserForm";
import { UserList } from "@/widgets/userList/UserList";

export default function UsersPage() {
    const [createUser] = useCreateUserMutation()
    const handleCreate = async (data) => {
        try {
            await createUser(data).unwrap()
        } catch (error) {
            console.log('Помилка створення юзкра:', error)
        }
    };
    return (<section className="select-wrapper">
        <h1>Користувачі</h1>
        <CreateUserForm onSubmit={handleCreate} />
        <UserList />
    </section>);
}