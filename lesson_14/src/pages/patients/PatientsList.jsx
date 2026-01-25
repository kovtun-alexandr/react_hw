import PatirntsItem from "./PatirntsItem";

function PatientsList({ patients, onDelete }) {
    return (
        <div className="table-wrapper">
            {patients.length > 0
                ? <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Ім`я</th>
                            <th>Стать</th>
                            <th>Дата народження</th>
                            <th>Телефон</th>
                            <th>Адресса</th>
                            <th>Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients && patients.map((patient, index) =>
                            <PatirntsItem
                                key={patient.id}
                                index={index}
                                patient={patient}
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

export default PatientsList;