import CartSummery from "@/components/CartSummery/CartSummery";
import TextInputFild from "@/components/TextInputFild/TextInputFild";
import useForm from "@/hooks/useForm";
import { useNavigate } from "react-router";
import styles from './CartForm.module.css'

function CartForm({ onSubmit, totalSum, count, onResets }) {
    const navigate = useNavigate()

    const { value, handleChange, setValue } = useForm({
        firstName: '',
        lastName: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(value)
        onResets()
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInputFild
                label="First name"
                name="firstName"
                value={value.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
            />
            <TextInputFild
                label="Last name"
                name="lastName"
                value={value.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
            />
            <CartSummery
                totalSum={totalSum}
                count={count}
            />
            <div className="row buttons">
                <button
                    onClick={() => navigate('/hotels')}
                >
                    Back
                </button>
                <button
                    type="submit"
                    onClick={() => navigate('/')}
                >
                    Place order
                </button>
            </div>
        </form>
    );
}

export default CartForm;