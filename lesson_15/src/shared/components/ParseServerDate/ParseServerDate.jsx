import styles from './ParseServerDate.module.css'

function ParseServerDate({ isoStringDate }) {
    const date = new Date(isoStringDate)

    const optionsDate = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Kyiv',
    }

    const viewDate = date.toLocaleString('en-US', optionsDate);
    return (
        <span className={styles.pink}>{viewDate}</span>
    );
}

export default ParseServerDate;