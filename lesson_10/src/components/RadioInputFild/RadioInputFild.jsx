import { useId } from "react";
import styles from './RadioInputFild.module.css'

function RadioInputFild({ name, value, checked, onChange, price, icon }) {
    const fildId = useId()

    const BusIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 16v2a2 2 0 0 0 2 2h1v2h2v-2h6v2h2v-2h1a2 2 0 0 0 2-2v-2H4zm0-2h16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8zm2-6h12v2H6V8z" />
        </svg>
    );

    const TrainIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-4.418 0-8 1.79-8 4v9c0 2.21 3.582 4 8 4s8-1.79 8-4V6c0-2.21-3.582-4-8-4zm0 2c3.314 0 6 .895 6 2s-2.686 2-6 2-6-.895-6-2 2.686-2 6-2zm-4 7h8v2H8v-2zm-1 6h10l2 3H5l2-3z" />
        </svg>
    );

    const PlaneIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2v5l-2 2v1l3-1 3 1v-1l-2-2v-5l8 2z" />
        </svg>
    );

    const iconsMap = {
        bus: BusIcon,
        train: TrainIcon,
        plane: PlaneIcon,
    }
    return (
        <div className={styles['radio-card']}>
            <input
                className={styles['radio-hidden']}
                id={fildId}
                type="radio"
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label
                htmlFor={fildId}
                className={styles['radio-label']}
            >
                <div className={styles["radio-icon"]}>
                    {iconsMap[value] || value}
                </div>
                <span className={styles["radio-text"]}>{value} (${price})</span>
            </label>
        </div>
    );
}

export default RadioInputFild;