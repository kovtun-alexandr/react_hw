import { Outlet } from "react-router";
import useFetch from "../../hooks/useFetch";
import apiRouter from "../../api/apiRouters"
import ProductsCategoriesList from "../../components/products/ProductsCategoriesList";
import Loading from "../../components/Loading";

function ProductsLayout() {
    const { data: products = [], isLoading, error } = useFetch(apiRouter.productList)

    const categories = [...new Set(products.map(product => product.category))]

    return (
        <section className="products">
            <div className="container">
                {isLoading ? <Loading />
                    : (
                        <>
                            <h2 className="products__title">Products</h2>
                            <div className="products__wrap">
                                <ProductsCategoriesList categories={categories} />
                                <Outlet context={products} />
                            </div>
                        </>
                    )}
                {!!error && <h1 className="error">Error: {error}</h1>}
            </div>
        </section>
    );
}

export default ProductsLayout;