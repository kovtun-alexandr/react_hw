import Loading from "@/components/Loading/Loading";
import { fetchProductById } from "@/redux/slices/products/clice";
import frontRoutes from "@/routes/frontRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";

function ProductsDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { currentProduct: product, loading, error } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProductById(id))
    }, [dispatch])
    return (
        <section className="product">
            <div className="container">
                {error
                    ? (<Error error={error} />)
                    : loading
                        ? (<Loading />)
                        : product
                            ? (<div className="product__wrap">
                                <h1 className="product__title">
                                    {`${product.brandName} - ${product.name}`}
                                </h1>
                                <div className="product__image">
                                    <img src={product.imgUrl} alt="image" />
                                </div>
                                <div className="product__description description">
                                    <div className="description__text">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="description__price">
                                        <p>Price: {product.price} $</p>
                                    </div>
                                    <div className="description__buttons">
                                        <Link
                                            className="btn"
                                            to={frontRoutes.navigate.products.root}
                                            aria-label='Go to back category'
                                        >
                                            Back ↩
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                            : (<p></p>)
                }
            </div>
        </section>
    );
}

export default ProductsDetail;