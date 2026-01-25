import DoctorsCatd from "./DoctorsItem";

function DoctorsList({ doctors, onDelete }) {
    return (
        <div className="table-wrapper">
            {doctors.length > 0
                ? <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Ім`я</th>
                            <th>Спеціалізація</th>
                            <th>Години праці</th>
                            <th>№ кімнати</th>
                            <th>Телефон</th>
                            {/* <th>E-mail</th> */}
                            <th>Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors && doctors.map((doctor, index) =>
                            <DoctorsCatd
                                key={doctor.id}
                                index={index}
                                doctor={doctor}
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

export default DoctorsList;