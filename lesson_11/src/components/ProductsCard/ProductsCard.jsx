import frontRoutes from "@/routes/frontRoutes";
import { Link } from "react-router";
import styles from './ProductsCard.module.css'

function ProductsCard({ product }) {
    console.log(product)
    return (
        <li className={styles["product-card"]}>
            <div className={styles.head}>
                <Link
                    to={frontRoutes.navigate.products.detail.replace(':id', `${product.id}`)}
                >
                    <img src={product.imgUrl} alt={`${product.brandName} - ${product.name}`} />
                </Link>
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>
                    <Link to={frontRoutes.navigate.products.detail.replace(':id', `${product.id}`)}>
                        {`${product.brandName} - ${product.name}`}
                    </Link>
                </h3>
                <div>Price: {product.price} $</div>
            </div>
        </li >

    );
}

export default ProductsCard;