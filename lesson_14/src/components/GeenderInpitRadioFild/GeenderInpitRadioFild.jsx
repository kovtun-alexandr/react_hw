import { useId } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import styles from './GeenderInpitRadioFild.module.css'

function GeenderInpitRadioFild({ name, value, onChange }) {
    const maleId = useId()
    const femaleId = useId()

    const selectedValue = value || "male";
    return (
        <div className={styles["gender-field"]}>
            <label>Стать пацієнта:</label>
            <div className={styles["gender-options"]}>
                <label
                    htmlFor={maleId}
                    className={`${styles['gender-option']} ${selectedValue === "male" ? styles.active : ""}`}
                >
                    <FaMale className={styles["gender-icon"]} />
                    <span>Чоловіча</span>
                </label>
                <input
                    type="radio"
                    name={name}
                    id={maleId}
                    value="male"
                    checked={value === "male"}
                    onChange={onChange}
                />
                <label
                    htmlFor={femaleId}
                    className={`${styles['gender-option']} ${selectedValue === "female" ? styles.active : ""}`}
                >
                    <FaFemale className={styles["gender-icon"]} />
                    <span>Жіноча</span>
                </label>
                <input
                    type="radio"
                    name={name}
                    id={femaleId}
                    value="female"
                    checked={value === "female"}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default GeenderInpitRadioFild;