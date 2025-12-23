import { Link, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import apiRouters from "../../api/apiRouters";
import frontRoutes from "../../router/frontRoutes";
import Loading from "../../components/Loading";

function ProductDetail() {
    const { product } = useParams()
    const id = Number(product.split("-")[0])

    const { data: selectedProduct, isLoading, error } = useFetch(apiRouters.getProductById(id));

    return (
        <section className="product">
            <div className="container">
                {isLoading ? <Loading />
                    : (<div className="product__wrap">
                        <h1 className="product__title">{`${selectedProduct.brandName} - ${selectedProduct.name}`}</h1>
                        <div className="product__image">
                            <img src={selectedProduct.imgUrl} alt="image" />
                        </div>
                        <div className="product__description description">
                            <div className="description__text">
                                <p>{selectedProduct.description}</p>
                            </div>
                            <div className="description__price">
                                <p>Price: {selectedProduct.price} $</p>
                            </div>
                            <div className="description__buttons">
                                <Link
                                    className="btn"
                                    to={frontRoutes.navigate.products}
                                    aria-label='Go to back category'
                                >
                                    Back ↩
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
                {!!error && <h1 className="error">Error: {error}</h1>}
            </div>
        </section>
    );
}

export default ProductDetail;