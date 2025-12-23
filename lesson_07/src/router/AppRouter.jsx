import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import Page404 from "../pages/404/Page404";
import MainLayout from "../components/layout/MainLayout";
import ProductsPage from "../pages/products/ProductsPage";
import ProductDetail from "../pages/products/ProductDetail";
import ProductsLayout from "../pages/products/ProductsLayout";
import Cart from "../pages/cart/Cart";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />

                <Route path="products" element={<ProductsLayout />}>
                    <Route index element={<ProductsPage />} />
                    <Route path=":category" element={<ProductsPage />} />
                </Route>

                <Route path="products/:category/:product" element={<ProductDetail />} />

                <Route path="cart" element={<Cart />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;