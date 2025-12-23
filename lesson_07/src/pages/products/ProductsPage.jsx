import { useOutletContext, useParams } from "react-router";
import ProductsCard from "../../components/products/ProductsCard";
import { useEffect, useState } from "react";

function ProductsPage() {
    const products = useOutletContext() || []
    const { category } = useParams()

    const productsFiltered = category
        ? products.filter(product => product.category === category)
        : products

    const [visibleCount, setVisibleCount] = useState(9)

    useEffect(() => {
        setVisibleCount(9)
    }, [category])

    const visibleProducts = productsFiltered.slice(0, visibleCount)

    function handleLoadMore() {
        setVisibleCount(prev => prev + 9)
    }
    return (
        <section className="products__inner">
            <div className="products__list">
                {visibleProducts.map(product => (
                    <ProductsCard key={product.id} {...product} />
                ))}
            </div>
            {visibleCount < productsFiltered.length && (
                <button
                    className="products__btn btn"
                    onClick={handleLoadMore}
                >
                    Load more ↻
                </button>
            )}
        </section>
    );
}

export default ProductsPage;