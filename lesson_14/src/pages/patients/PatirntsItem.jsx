import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton/EditButton";
import frontRoutes from "@/router/frontRoutes";
import { Link } from "react-router";

function PatirntsItem({ patient, index, onDelete }) {
    const genderEmoji = patient.gender === 'female' ? '👩' : '🧔🏻'
    const genderTitle = patient.gender === 'female' ? 'Жінка' : 'Чоловік'
    const handleDelete = (patientId) => {
        onDelete(patientId)
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <Link
                    to={frontRoutes.navigate.patients.card(patient.id)}
                >
                    {patient.fullName}
                </Link>
            </td>
            <td title={genderTitle}>
                {genderEmoji}
            </td>
            <td>{patient.birthDate}</td>
            <td>{patient.phone}</td>
            <td>{patient.address}</td>
            <td>
                <EditButton
                    title="Редагувати"
                    path={frontRoutes.navigate.patients.edit(patient.id)}
                />
                <DeleteButton
                    title="Видалити"
                    onClick={() => handleDelete(patient.id)}
                />

            </td>
        </tr>
    );
}

export default PatirntsItem;