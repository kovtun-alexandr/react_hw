function TimeDisplayView({ dateStr }) {
    const date = new Date(dateStr)

    const optionsDate = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }

    const optionsTime = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Kyiv',
    }

    const readableDate = date.toLocaleString('uk-UA', optionsDate);
    const readableTime = date.toLocaleString('uk-UA', optionsTime);
    return (
        <div className="timeBlock">
            <div className="date">{readableDate}</div>
            <div className="time">o {readableTime}</div>
        </div>
    );
}

export default TimeDisplayView;