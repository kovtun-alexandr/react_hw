import { Outlet } from "react-router";
import AdminNavigate from "@/layouts/components/admin/AdminNavigate/AdminNavigate";
import OrderProvider from "@/providers/OrderProvider";

function AdminLayout() {

    return (
        <div className="container">
            <OrderProvider>
                <div className="admin">
                    <aside className="admin-sidebar">
                        <h2>Admin menu:</h2>
                        <AdminNavigate />
                    </aside>

                    <main className="admin-content">
                        <Outlet />
                    </main>
                </div>
            </OrderProvider>
        </div>
    );
}

export default AdminLayout;