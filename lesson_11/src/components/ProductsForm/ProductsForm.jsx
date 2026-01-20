import useForm from "@/hooks/useForm";
import InputField from "../InputField/InputField";
import { Link, useNavigate } from "react-router";
import frontRoutes from "@/routes/frontRoutes";

function ProductsForm({ onSubmit }) {
    const navigate = useNavigate()
    const { value, handleChange, setValue } = useForm({})

    function handleOnSubmit(e) {
        e.preventDefault()
        onSubmit(value)
        setValue({})
        navigate(frontRoutes.navigate.products.root)
    }
    return (
        <form
            onSubmit={handleOnSubmit}
            className="flx-c g-1"
            action=""
        >
            <InputField
                label="Company or brand name:"
                type="text"
                name="brandName"
                value={value}
                placeholder="Apple"
                onChange={handleChange}
            />
            <InputField
                label="Product name:"
                type="text"
                name="name"
                value={value}
                placeholder="iPhone 14"
                onChange={handleChange}
            />
            <InputField
                label="Category name:"
                type="text"
                name="category"
                value={value}
                placeholder="Phone"
                onChange={handleChange}
            />
            <InputField
                label="Image link:"
                type="text"
                name="imgUrl"
                value={value}
                placeholder="http://exemple.com/image.jpg"
                onChange={handleChange}
            />
            <InputField
                label="Product description:"
                type="text"
                name="description"
                value={value}
                placeholder="A thorough description of the product you are adding"
                onChange={handleChange}
            />
            <InputField
                label="Product price ($):"
                type="number"
                name="price"
                value={value}
                placeholder="999"
                onChange={handleChange}
            />
            <div className="actions">
                <Link
                    className="btn"
                    to={frontRoutes.navigate.products.root}
                >
                    Back
                </Link>
                <button
                    className="btn"
                >Add product</button>
            </div>
        </form>
    );
}

export default ProductsForm;