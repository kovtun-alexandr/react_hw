import { appointmentStatuses } from "@/constants/appointmentStatuses";
import styles from './StatusLabel.module.css'

function StatusLabel({ statusId }) {
    const status = appointmentStatuses.find(s => s.id === statusId)

    return (
        <span
            className={`${styles.label} ${styles[status.id]}`}
        >
            {status.fullName}
        </span>
    );
}

export default StatusLabel;