import { useDispatch, useSelector } from "react-redux";
import ProductsList from "./ProductsList";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";
import ProductsFilter from "@/components/ProductsFilter/ProductsFilter";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/slices/products/clice";

function ProductsManager() {
    const dispatch = useDispatch()
    const { productsList, searchResults, isSearching, loading, error } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const productsShow = isSearching
        ? searchResults
        : productsList
    return (<section className="products">
        <div className="container flx-c g-1">
            <h1>Products</h1>
            <ProductsFilter />
            {error
                ? (<Error error={error} />)
                : loading
                    ? (<Loading />)
                    : (<ProductsList products={productsShow} />)
            }
        </div>
    </section>);
}

export default ProductsManager;