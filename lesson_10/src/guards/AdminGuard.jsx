import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router";

function AdminGuard({ children }) {
    const { user } = useContext(UserContext)
    if (!user || user.role !== 'admin') {
        return <Navigate to='/' replace />
    }
    return children
}

export default AdminGuard;