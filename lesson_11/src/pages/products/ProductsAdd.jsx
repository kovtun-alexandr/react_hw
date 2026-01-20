import ProductsForm from "@/components/ProductsForm/ProductsForm";
import { addProduct } from "@/redux/slices/products/clice";
import { useDispatch } from "react-redux";

function ProductsAdd() {
    const dispatch = useDispatch()

    function handleSubmit(formData) {
        dispatch(addProduct(formData))
    }
    return (
        <section className="add">
            <div className="container flx-c g-1">
                <h1>Add product</h1>
                <ProductsForm
                    onSubmit={handleSubmit}
                />
            </div>
        </section>
    );
}

export default ProductsAdd;