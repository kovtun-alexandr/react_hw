import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { useState } from "react";

function ProductsList({ products }) {
    const [visibleCount, setVisibleCount] = useState(9)

    const visibleProducts = products.slice(0, visibleCount)

    function handleLoadMore() {
        setVisibleCount(perv => perv + 9)
    }
    return (
        <div className="products__inner">
            <ul className="products__list">
                {visibleProducts.map(product => (
                    <ProductsCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </ul>
            {visibleCount < products.length && (
                <button
                    className="products__btn btn"
                    onClick={handleLoadMore}
                >
                    Load more ↻
                </button>
            )}
        </div>
    );
}

export default ProductsList;