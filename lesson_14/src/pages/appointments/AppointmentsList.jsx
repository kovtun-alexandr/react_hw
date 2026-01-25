import AppointmentsCatd from "./AppointmentsItem";

function AppointmentsList({ appointments, onDelete }) {
    return (
        <div className="table-wrapper">
            {
                appointments.length > 0
                    ? <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Пацієнт</th>
                                <th>Лікар</th>
                                <th>Дата</th>
                                <th>Скарга</th>
                                <th>Статус</th>
                                <th>Дії</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments && appointments.map((appointment, index) =>
                                <AppointmentsCatd
                                    key={appointment.id}
                                    index={index}
                                    appointment={appointment}
                                    onDelete={onDelete}
                                />
                            )}
                        </tbody>
                    </table>
                    : <p>Список порожній</p>
            }
        </div>
    );
}

export default AppointmentsList;