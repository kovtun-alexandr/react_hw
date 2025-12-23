import ProductsCategoriesItem from "./ProductsCategoriesItem";

function ProductsCategoriesList({ categories }) {
    return (
        <aside className="products__category categories">
            <h3 className="categories__title">Categories:</h3>
            <ul className="categories__list">
                {!!categories && (
                    categories.map(category =>
                        <ProductsCategoriesItem key={category} name={category} />
                    ))}
            </ul>
        </aside>
    );
}

export default ProductsCategoriesList;