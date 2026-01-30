import InputField from "@/shared/components/InputField/InputField";
import { useDesireForm } from "../model/useDesireForm";
import styles from './DesireForm.module.css'
import { Link } from "react-router";
import frontRoutes from "@/app/router/frontRoutes";

function DesireForm({ onSubmit, initialValue }) {
    const { values, errors, isSubmitting, handleChange, handleSubmit } = useDesireForm(initialValue, onSubmit)
    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <InputField
                label="Desire:"
                type="text"
                name="title"
                value={values.title}
                placeholder="Enter your desire"
                onChange={handleChange}
            />
            <InputField
                label="Date:"
                type="datetime-local"
                name="date"
                value={values.date}
                onChange={handleChange}
            />
            <InputField
                label="Friend's name"
                type="text"
                name="friendName"
                value={values.friendName}
                placeholder="Enter your friend's name"
                onChange={handleChange}
            />
            <div className={styles.action}>
                <Link
                    className="btn"
                    to={frontRoutes.navigate.desires.root}
                >
                    Back
                </Link>
                <button
                    className="btn"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving...' : 'Save'}
                </button>
            </div>
        </form>
    );
}

export default DesireForm;