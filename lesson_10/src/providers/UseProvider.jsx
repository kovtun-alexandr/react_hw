import { UserContext } from "@/contexts/UserContext";

function UseProvider({ children }) {
    const user = { userName: 'Oleksandr', role: 'admin' }
    return (
        <UserContext value={{ user }}>
            {children}
        </UserContext>
    );
}

export default UseProvider;