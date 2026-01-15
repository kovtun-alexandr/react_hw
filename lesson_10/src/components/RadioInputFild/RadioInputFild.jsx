import { useId } from "react";
import styles from './RadioInputFild.module.css'
import BusIcon from '@/assets/image/icon/bus.svg'
import TrainIcon from '@/assets/image/icon/train.svg'
import PlaneIcon from '@/assets/image/icon/airplane.svg'

function RadioInputFild({ name, value, checked, onChange, price, icon }) {
    const fildId = useId()

    const iconsMap = {
        bus: BusIcon,
        train: TrainIcon,
        plane: PlaneIcon,
    }

    console.log(iconsMap)
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
                    <img src={iconsMap[value]} alt={value} />
                </div>
                <span className={styles["radio-text"]}>{value.toUpperCase()} (${price})</span>
            </label>
        </div>
    );
}

export default RadioInputFild;