import { Link } from "react-router";
import frontRoutes from "../../router/frontRoutes";

function ProductsCard({ id, category, brandName, name, imgUrl, price }) {
    return (
        <div className="product__item product-card">
            <div className="product-card__head">
                <Link to={frontRoutes.navigate.getProductDetail(
                    category,
                    id,
                    brandName,
                    name
                )}>
                    <img src={imgUrl} alt={`${brandName} - ${name}`} />
                </Link>
            </div>
            <div className="product-card__body">
                <h3 className="product-card__title">
                    <Link to={frontRoutes.navigate.getProductDetail(
                        category,
                        id,
                        brandName,
                        name
                    )}>
                        {brandName} - {name}
                    </Link>
                </h3>
                <div>Price: {price} $</div>
            </div>
        </div >
    );
}

export default ProductsCard;